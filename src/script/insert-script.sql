INSERT INTO canteen(canteen_id,canteen_name) VALUES ('CAN01','โรงอาหารพระเทพ');
INSERT INTO canteen(canteen_id,canteen_name) VALUES ('CAN02','โรงอาหารคณะวิทยาศาตร์');
INSERT INTO canteen(canteen_id,canteen_name) VALUES ('CAN03','โรงอาหารคณะวิศวกรรมศาสตร์');
INSERT INTO canteen(canteen_id,canteen_name) VALUES ('CAN04','โรงอาหารคณะครุศาสตร์');
INSERT INTO canteen(canteen_id,canteen_name) VALUES ('CAN05','โรงอาหารเกษตร');
INSERT INTO canteen(canteen_id,canteen_name) VALUES ('CAN06','โรงอาหารคณะไอที');
INSERT INTO canteen(canteen_id,canteen_name) VALUES ('CAN07','ร้านค้าบริเวณสถาบัน');

INSERT INTO religion(religion_id,religion_name) VALUES ('RE01','ศาสนาอิสลาม');
INSERT INTO religion(religion_id,religion_name) VALUES ('RE02','ศาสนาพุทธ');
INSERT INTO religion(religion_id,religion_name) VALUES ('RE03','ศาสนาฮินดู');
INSERT INTO religion(religion_id,religion_name) VALUES ('RE04','ศาสนาคริสต์');

INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT01','อาหารเส้น');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT02','อาหารทานเล่น');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT03','เครื่องดื่ม');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT04','อาหารคลีน');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT05','อาหารตามสั่ง');

INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES01','ร้านเทคโนอินเตอร์','07.00-17.00 น.','098-xxx-0008',0.0,'','CAN01','RE02','FT02', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES02','ร้านอิดรีสอาหารตามสั่ง','07.00-17.00 น.','098-xxx-0008',0.0,'','CAN01','RE01','FT05', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES03','ร้านลุงพจน์','07.00-17.00 น.','098-xxx-0008',0.0,'','CAN02','RE02','FT05', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES04','ร้านเมะ','07.00-17.00 น.','098-xxx-0008',0.0,'','CAN07','RE01','FT05', CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU01','ข้าวผัดกุ้ง',40,'ข้าวผัดกุ้งเน้น ๆ เน้นใส่ใจ ไม่เน้นใส่กุ้ง',0.0,'','RES02',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU02','ผัดกระเพราหมูกรอบ',40,'หมูจุกๆ หมายถึงหมูกินเยอะจนจุก เรียนเชิญจ้า',0.0,'','RES03',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU03','ส้มตำทุกอย่าง',50,'แซ่บกว่าส้มตำก็แม่ค้าเอง',0.0,'','RES04',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU04','เสต็กเนื้อเพิ่มไข่ข้น',60,'',0.0,'','RES01',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU05','ราดหน้าทะเล',40,'ขนมาทั้งทะเลแล้วจ้า',0.0,'','RES02',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU06','ยำมาม่าทะเล',60,'',0.0,'','RES04',CURRENT_TIMESTAMP());

INSERT INTO user(user_id,student_id,firstname,lastname,status,user_timestamp) VALUES('user01','63xxx000','defualt','lastname',0,CURRENT_TIMESTAMP());

insert into update_rank(user_id,menu_id,score,timestamp) values('user01','MENU01','5',CURRENT_TIMESTAMP());

SELECT score FROM menu WHERE menu_id = 'MENU01';
____________________________________________________________________________________________________________________________________________________________________


INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU25','ชานมไข่มุข',35,'ตัวชาไม่หวานมาก กลมกล่อม ตัวไข่มุกเหนียว หนึบหนับ และเยอะมาก เคี้ยวเพลินเลย',5.0,'https://www.chula.ac.th/wp-content/uploads/2020/01/cu_060163_000111.jpg','RES07',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU26','ชาเขียวมะลิ',30,'ตัวชาไม่หวานมาก กลมกล่อม หอมชามะลิ',5.0,'https://bluemochateas.com/wp-content/uploads/2021/08/เมนูชามะลิน้ำผึ้งมะนาว-e1629170865532-1252x1536.jpg.webp','RES07',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU27','อิตาเลี่ยนโซดา',25,'โซดาซ่า สดชื่น อร่อยรสผลไม้',5.0,'https://c.min.ms/t/d/member/c/42/42748/pagegallery/1541997946/39855f8e.jpg','RES07',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU28','ขนมปังปิ้ง',20,'ขนมปังปิ้ง กรอบ อร่อย หอมเนย มีหลายหน้าให้เลือก',5.0,'http://www.amphawanurak.com/elctfl/32/size5/466.jpg','RES07',CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU29','ก๋วยเตี๋ยวเรือ',40,'ก๋วยเตี๋ยวเรือ แซ่บ ซี้ด อร่อยจนน้ำตาไหล',5.0,'https://i0.wp.com/goodlifeupdate.com/app/uploads/2021/04/image-130-edited.png','RES08',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU30','เกาเหลาหมู',40,'เกาเหลา หมูจุกๆ แซ่บไม่แพ้ก๋วยเตี๋ยวเรือ',5.0,'https://cdn1.th.orstatic.com/userphoto/photo/2/1U9/00D3AG75957704549A9C3Apx.jpg','RES08',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU31','เกาเหลาเนื้อ',40,'เกาเหลา เนื้อแน่นๆจุกๆ แซ่บไม่แพ้ก๋วยเตี๋ยวเรือ',5.0,'https://www.ryoiireview.com/upload/article/202104/1619171141_c90281a462d8208e79da74c4957e9f3b.jpg','RES08',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU32','ข้าวสวย',10,'ข้าวสวยหอมมะลิ นุ่มละมุนลิ้น',5.0,'http://food.mthai.com/app/uploads/2017/02/Japanese-sushi-1.jpg','RES08',CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU33','เครป',40,'เครปกรอปๆ หอมกรุ่นๆ มีหน้าให้เลือกหลากหลาย',5.0,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-basic-crepes-horizontal-1545245797.jpg','RES09',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU34','หมูปิ้ง',10,'หมูปิ้งหอมๆ',5.0,'https://img.wongnai.com/p/1920x0/2021/10/19/df3a74ac131143a0b69bbc43eee8884e.jpg','RES09',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU35','ไก่ปิ้ง',10,'ไก่ปิ้งอร่อยๆ',5.0,'https://i.ytimg.com/vi/0iXbezJfUb0/maxresdefault.jpg','RES09',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU36','ข้าวเหนียว',5,'ข้าวเหนียวร้อนๆ ออกจากเตาใหม่ๆ',5.0,'https://s3.theasianparent.com/cdn-cgi/image/width=700,quality=95/tap-assets-prod/wp-content/uploads/sites/25/2021/05/3-6-300x300.jpg','RES09',CURRENT_TIMESTAMP());
