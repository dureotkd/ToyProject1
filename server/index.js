const express = require("express");
const mysql = require("mysql");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
const app = express();
const server = http.createServer(app);
const cors = require("cors");
server.listen(5005);
app.use(cors()); // CORS 미들웨어 추가
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const db = mysql.createPool({
  host: "localhost",
  user: "dureotkd",
  password: "slsksh33",
  database: "annual",
});

io.on("connection", function (socket) {
  socket.emit("test", { asd: "zzzzzzzzzzzzz" });
  socket.on("my other event", function (data) {
    console.log("response to my other event: ", data);
  });
});

app.get("/getInsertIt", function (req, res) {
  console.log(req.query, "zzzzzzzzz");
  const code = req.query.code === undefined ? "" : req.query.code;
  const ip = req.query.ip === undefined ? "" : req.query.ip;
  const editIp = req.query.editIp === undefined ? "" : req.query.editIp;

  db.query(
    `INSERT INTO interest VALUES('','${code}','0','11',NOW(),NOW(),'${ip}','${editIp}','Y')`,
    (err, data) => {
      if (!err) res.send(data);
      else res.send(err);
    }
  );
});

app.get("/getInsertEventAll", function (req, res) {
  const fstvlStartDate =
    req.query.fstvlStartDate === undefined ? "" : req.query.fstvlStartDate;
  const fstvlEndDate =
    req.query.fstvlEndDate === undefined ? "" : req.query.fstvlEndDate;
  const fstvlCo = req.query.fstvlCo === undefined ? "" : req.query.fstvlCo;
  const fstvlNm = req.query.fstvlNm === undefined ? "" : req.query.fstvlNm;
  const homepageUrl =
    req.query.homepageUrl === undefined ? "" : req.query.homepageUrl;
  const latitude = req.query.latitude === undefined ? "" : req.query.latitude;
  const longitude =
    req.query.longitude === undefined ? "" : req.query.longitude;
  const lnmadr = req.query.lnmadr === undefined ? "" : req.query.lnmadr;
  const rdnmadr = req.query.rdnmadr === undefined ? "" : req.query.rdnmadr;
  const referenceDate =
    req.query.referenceDate === undefined ? "" : req.query.referenceDate;
  const pageNo = req.query.pageNo === undefined ? "" : req.query.pageNo;

  db.query(
    `INSERT INTO event VALUES('','${fstvlStartDate}','${fstvlEndDate}','${fstvlCo}','${fstvlNm}','${homepageUrl}','${latitude}','${longitude}','${lnmadr}','${rdnmadr}','${referenceDate}',NOW(),'${pageNo}','Y')`,
    (err, data) => {
      if (!err) res.send(data);
      else res.send(err);
    }
  );
});

app.get("/getInsertEventD", function (req, res) {
  const eventSeq = req.query.eventSeq === undefined ? "" : req.query.eventSeq;
  const title = req.query.title === undefined ? "" : req.query.title;
  const contents = req.query.contents === undefined ? "" : req.query.contents;
  const targetCd = req.query.targetCd === undefined ? "" : req.query.targetCd;
  const targetCdNm =
    req.query.targetCdNm === undefined ? "" : req.query.targetCdNm;
  const themeCd = req.query.themeCd === undefined ? "" : req.query.themeCd;
  const themeCdNm =
    req.query.themeCdNm === undefined ? "" : req.query.themeCdNm;
  const placeCd = req.query.placeCd === undefined ? "" : req.query.placeCd;
  const placeCdNm =
    req.query.placeCdNm === undefined ? "" : req.query.placeCdNm;
  const prpleHoldYn =
    req.query.prpleHoldYn === undefined ? "" : req.query.prpleHoldYn;
  const recommendationPoint =
    req.query.recommendationPoint === undefined
      ? ""
      : req.query.recommendationPoint;
  const recommendationYn =
    req.query.recommendationYn === undefined ? "" : req.query.recommendationYn;
  const hotYn = req.query.hotYn === undefined ? "" : req.query.hotYn;
  const endDt = req.query.endDt === undefined ? "" : req.query.endDt;
  const beginDt = req.query.beginDt === undefined ? "" : req.query.beginDt;

  db.query(
    `INSERT INTO daejeonEvent VALUES('','${eventSeq}','${title}','${contents}','${targetCd}','${targetCdNm}','${themeCd}','${themeCdNm}','${placeCd}','${placeCdNm}','${prpleHoldYn}','${recommendationPoint}','${recommendationYn}','${hotYn}',NOW(),'${beginDt}','${endDt}','Y')`,
    (err, data) => {
      if (!err) res.send(data);
      else res.send(err);
    }
  );
});

app.get("/getSaveTourAll", function (req, res) {
  const addr1 = req.query.addr1 === undefined ? "" : req.query.addr1;
  const areaCode = req.query.areaCode === undefined ? "" : req.query.areaCode;
  const cat1 = req.query.cat1 === undefined ? "" : req.query.cat1;
  const cat2 = req.query.cat2 === undefined ? "" : req.query.cat2;
  const cat3 = req.query.cat3 === undefined ? "" : req.query.cat3;
  const contentId =
    req.query.contentId === undefined ? "" : req.query.contentId;
  const contentTypeId =
    req.query.contentTypeId === undefined ? "" : req.query.contentTypeId;
  const createdTime =
    req.query.createdTime === undefined ? "" : req.query.createdTime;
  const eventEndDate =
    req.query.eventEndDate === undefined ? "" : req.query.eventEndDate;
  const eventStartDate =
    req.query.eventStartDate === undefined ? "" : req.query.eventStartDate;
  const firstimage =
    req.query.firstimage === undefined ? "" : req.query.firstimage;
  const firstimage2 =
    req.query.firstimage2 === undefined ? "" : req.query.firstimage2;
  const mapx = req.query.mapx === undefined ? "" : req.query.mapx;
  const mapy = req.query.mapy === undefined ? "" : req.query.mapy;
  const mlevel = req.query.mlevel === undefined ? "" : req.query.mlevel;
  const modifiedtime =
    req.query.modifiedtime === undefined ? "" : req.query.modifiedtime;
  const readcount =
    req.query.readcount === undefined ? "" : req.query.readcount;
  const sigungucode =
    req.query.sigungucode === undefined ? "" : req.query.sigungucode;
  const tel = req.query.tel === undefined ? "" : req.query.tel;
  const title = req.query.title === undefined ? "" : req.query.title;

  db.query(
    `INSERT INTO TourInfo VALUES('','${title}','${contentId}','${contentTypeId}','${addr1}','${areaCode}','${cat1}','${cat2}','${cat3}','${createdTime}','${eventEndDate}','${eventStartDate}','${firstimage}','${firstimage2}','${mapx}',${mapy},'${mlevel}','${modifiedtime}','${readcount}','${sigungucode}','${tel}')`,
    (err, data) => {
      if (!err) res.send(data);
      else res.send(err);
    }
  );
});

app.get("/getAnalEventInDate", function (req, res) {
  const analDate = req?.query?.analDate;

  db.query(
    `SELECT * FROM event a WHERE a.fstvlendDate >= '${analDate}' AND a.state ='Y' ORDER BY a.fstvlendDate ASC`,
    (err, data) => {
      if (!err) res.send(data);
      else res.send(err);
    }
  );
});

app.get("/getTourInfoInDate", function (req, res) {
  const analDate = req?.query?.analDate;

  db.query(
    `SELECT * FROM TourInfo a WHERE a.eventEndDate >= '${analDate}' ORDER BY a.eventEndDate ASC`,
    (err, data) => {
      if (!err) res.send(data);
      else res.send(err);
    }
  );
});

app.get("/getTourInfo", function (req, res) {
  db.query(
    `
    SELECT 
      * 
    FROM 
      TourInfo a      
      WHERE a.eventStartDate <= NOW()
      AND a.eventEndDate >= NOW()
      AND a.addr NOT LIKE '%제주특별%'
    ORDER BY a.readcount ASC , ABS(DATEDIFF( NOW() , a.eventStartDate)) ASC;
    `,
    (err, data) => {
      if (!err) res.send(data);
      else res.send(err);
    }
  );
});

app.get("/getUserIt", function (req, res) {
  const seq = req?.query?.seq;

  db.query(
    `SELECT * FROM interest a WHERE a.seq='${seq}' AND a.state ='Y'`,
    (err, data) => {
      if (!err) res.send(data);
      else res.send(err);
    }
  );
});

app.get("/getAdminIntersetData", function (req, res) {
  //    res.header("Access-Control-Allow-Origin", "*");
  db.query("SELECT * FROM adminInterest a WHERE a.state ='Y'", (err, data) => {
    if (!err) res.send(data);
    else res.send(err);
  });
});

app.post("/getInsertDaejeonEvent", () => {
  db.query("SELECT * FROM adminInterest a WHERE a.state ='Y'", (err, data) => {
    if (!err) res.send(data);
    else res.send(err);
  });
});

io.on("connection", function (socket) {
  socket.emit("news", { message: "Hello World?" });
  socket.on("my other event", function (data) {
    console.log("response to my other event: ", data);
  });
});
