// 库存管家(常驻服务器后端,Cloud Run)——跟"库存登记"(Apps Script 版)完全
//独立的一份 app,数据是从"库存登记"复制出来的一份独立副本,往后两边数据
// 各自独立、不再同步。换后端部署时只改这一行,不用碰 index.html。
const API_BASE_URL = "https://inventory-butler-744372078894.us-central1.run.app";
