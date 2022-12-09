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
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES05','ร้านป้าวา อิสลามซิ่ง','07.00-17.00 น.','098-xxx-0008',4.5,'','CAN07','RE01','FT05', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES05','ร้านป้าสา อิสลามบ้านไกล','07.00-17.00 น.','098-xxx-0008',4.5,'','CAN07','RE01','FT05', CURRENT_TIMESTAMP());

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
<<<<<<< HEAD
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU07','ยำสา',60,'',4.3,'','RES04',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU08','ยำวา',60,'',4.1,'','RES04',CURRENT_TIMESTAMP());
=======

INSERT INTO user(user_id,student_id,firstname,lastname,status,user_timestamp) VALUES('user01','63xxx000','defualt','lastname',0,CURRENT_TIMESTAMP());

insert into update_rank(user_id,menu_id,score,timestamp) values('user01','MENU01','5',CURRENT_TIMESTAMP());

SELECT score FROM menu WHERE menu_id = 'MENU01';
>>>>>>> 89a10c5e2e0756e82d22e1f1bc1f8c02e72e993f
