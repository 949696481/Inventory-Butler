// 自毁 service worker——早期版本把网页版放在根目录时,在这里注册过一个
// service worker,浏览器会一直用它缓存的旧内容、不理会普通刷新。目录结构
//改成"入口页 + app/ 子目录"后,这个文件顶替旧 sw.js 的位置,唯一作用是
// 清掉旧缓存、注销自己,让根路径恢复成正常的"每次都问网络要最新内容"。
// 生效后可以删掉这个文件(不会再有旧注册需要清理)。
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clientsList = await self.clients.matchAll({ type: "window" });
      clientsList.forEach((client) => client.navigate(client.url));
    })()
  );
});
