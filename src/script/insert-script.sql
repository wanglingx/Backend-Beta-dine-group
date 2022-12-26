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
INSERT INTO religion(religion_id,religion_name) VALUES ('RE05','ทุกศาสนา');

INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT01','อาหารเส้น');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT02','อาหารทานเล่น');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT03','เครื่องดื่ม');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT04','อาหารคลีน');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT05','อาหารตามสั่ง');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT06','ขนม');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT07','อาหารอีสาน');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT08','ผลไม้');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT09','อาหารญี่ปุ่น');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT10','อาหารฝรั่ง');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT11','คาเฟ่');
INSERT INTO foodtype(foodtype_id,foodtype_name) VALUES ('FT12','ข้าวราดแกง');

INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES01','ร้านเทคโนอินเตอร์','07.00-17.00 น.','098-xxx-0008',5.0,'https://ik.imagekit.io/seproject/se/005.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670950969162','CAN01','RE02','FT02', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES02','ร้านอิดรีสอาหารตามสั่ง','07.00-17.00 น.','098-xxx-0008',5.0,'https://img.wongnai.com/p/800x0/2018/08/28/14a1a2241904404a9dbe8db477cb1d73.jpg','CAN01','RE01','FT05', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES03','ร้านลุงพจน์','07.00-17.00 น.','098-xxx-0008',5.0,'https://img.bester-global.com/report_images/large/482004.jpg','CAN02','RE02','FT05', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES04','ร้านเมะ','07.00-17.00 น.','098-xxx-0008',5.0,'https://images.aws.nestle.recipes/resized/625c4c724efd92e95be1788322676b57_stuffed-omelette-with-pork-and-shrimp_944_531.jpeg','CAN07','RE01','FT05', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES06','ร้านป้าวา อิสลามซิ่ง','07.00-17.00 น.','098-xxx-0008',5.0,'https://ik.imagekit.io/seproject/se/wa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670991466877','CAN02','RE05','FT05', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES05','ร้านป้าสา อิสลามบ้านไกล','07.00-17.00 น.','098-xxx-0008',5.0,'https://ik.imagekit.io/seproject/se/S__33243155.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670991493270','CAN02','RE04','FT05', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES07','ANNIE SHAKE','07.00-17.00 น.','098-xxx-0008',5.0,'https://img.wongnai.com/p/1920x0/2018/01/29/8f00e7a6ec774e3bb0821f19c283ee83.jpg','CAN01','RE05','FT03', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES08','KL VILLA','07.00-17.00 น.','098-xxx-0008',5.0,'https://img.wongnai.com/p/1920x0/2022/04/11/09cb8f92c6364183b8f54fa2408e7ab5.jpg','CAN07','RE02','FT01', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES09','ร้านบุปผา','07.00-17.00 น.','098-xxx-0008',5.0,'https://ik.imagekit.io/seproject/se/%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%8C%E0%B9%82%E0%B8%AB%E0%B8%A5%E0%B8%94.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670990504780','CAN03','RE02','FT06', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES10','ร้านพี่ฝน','07.00-17.00 น.','098-xxx-0008',5.0,'https://img.wongnai.com/p/1920x0/2018/02/07/a4343ac4c82b4ca4aa19ae434e8ada4c.jpg','CAN01','RE05','FT03', CURRENT_TIMESTAMP());
INSERT INTO restaurant(restaurant_id,restaurant_name,restaurant_time,phone_number,restaurant_score,restaurant_picture,canteen_id,religion_id,foodtype_id,restaurant_timestamp) 
VALUES ('RES11','ร้านข้าวแกงธงฟ้า','07.00-17.00 น.','098-xxx-0008',5.0,'https://img.wongnai.com/p/1920x0/2021/09/28/27e9af7a98eb45fca875d62ad3987925.jpg','CAN03','RE02','FT12', CURRENT_TIMESTAMP());


INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU01','แกงกระหรี่ หมูทอด',40,'แกงกระหรี่เข้มข้น หมูทอดชิ้นใหญ่ๆ กรอบนอกนุ่มใน',5.0,'https://ik.imagekit.io/seproject/se/001.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670950969146','RES01',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU02','สเต็กอกไก่',59,'สเต็กอกไก่นุ่มๆ พร้อมด้วยซอสที่มีให้เลือกมากมาย',5.0,'https://ik.imagekit.io/seproject/se/010.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670950969203','RES01',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU03','ซุปเห็ด',40,'ซุปเห็ดหอมๆ เหมาะกับการกินตอนเช้า',5.0,'https://img.wongnai.com/p/1920x0/2021/04/09/624acd68c42649a2a1795173c968b7ab.jpg','RES01',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU04','ไข่กระทะ',40,'ไข่กระทะหอมๆ เครื่องแน่นๆ เหมาะกับการเป็นอาหารเช้า',5.0,'https://img.wongnai.com/p/1920x0/2021/06/06/7cf37f8d20274e6aa1fa345380873c49.jpg','RES01',CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU05','ทะเลผัดผงกระหรี่',40,'ผัดผงกระหรี่หอมๆ พร้อมทะเลเครื่องแน่นๆ',5.0,'https://img.wongnai.com/p/1920x0/2018/05/10/25d66757444e47b7a8085262050ad7ab.jpg','RES02',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU06','ราดหน้าทะเล',40,'ราดหน้าทะเล เครื่องแน่นๆ ราคาย่อมเยา',5.0,'https://img.wongnai.com/p/1968x0/2019/08/30/1130f168bfcc4dd995175d34caaaecfe.jpg','RES02',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU07','สปาเก็ตตี้ขี้เมาทะเล',40,'สปาเก็ตตี้เหนียวนุ่ม ผัดขี้เมาหอมๆ',5.0,'https://www.bloggang.com/data/t/tamjai-jn/picture/1585903209.jpg','RES02',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU08','กระเพราไก่',40,'กระเพราไก่แซ่บๆ ดุดันไม่เกรงใจใคร',5.0,'https://img.wongnai.com/p/1920x0/2019/03/14/fc08ab22f3ac4135b292eda27cc872f9.jpg','RES02',CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU09','กระเพราหมูกรอบ',35,'ข้าวหอมๆ กระเพราร้อนๆ หมูกรอบฟันแตก',5.0,'https://i.pinimg.com/474x/30/7f/7a/307f7a8c980b465630deb20e93d4f1c4.jpg','RES03',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU10','ไข่ข้นกุ้ง',35,'ไข่ข้นกุ้งจากแม่น้ำไนล์ กุ้งเนื้อแน่น บวก ไข่เนื้อนุ่ม',5.0,'https://img.wongnai.com/p/1920x0/2017/09/26/f4a2b35abd654da6897ac35a7828866e.jpg','RES03',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU11','ผัดผงกระหรี่ทะเล',35,'ยกมาทั้งทะเล เพื่อมาทำผัดผงกระหรี่',5.0,'https://s359.kapook.com/pagebuilder/9c13331c-f093-4dcb-8f5a-1c43ac5be31e.jpg','RES03',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU12','ไก่ทอดกระเทียม',35,'เนื้อไก่คุณภาพ นำเข้าจากตลาดสด เนื้อนุ่ม อร่อย',5.0,'https://food.mthai.com/app/uploads/2017/05/Fried-Chicken-with-garlic-and-pepper.jpg','RES03',CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU13','ไข่ยัดไส้',40,'หอมอร่อย เครื่องแน่น เนื้อนุ่ม',5.0,'https://img-global.cpcdn.com/recipes/6c6aa7da23b4fad4/1200x630cq70/photo.jpg','RES04',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU14','พะแนงเนื้อ',40,'เนื้อคุณภาพ ระดับ A5 ',5.0,'https://food.mthai.com/app/uploads/2018/02/Red-Curry-Soup-with-Beef.jpg','RES04',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU15','ผัดพริกเผาทะเล',40,'ร้อนแรง ดุจแดดประเทศไทย การันตี',5.0,'http://sv6.postjung.com/wb/data/668/668167-img-1364870448-1.jpg','RES04',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU16','ไก่กรอบทอด',40,'อร่อย บอกเลยยยยยย',5.0,'https://เมนู.net/media/images/recipe/59e86eaf8337d_.jpg','RES04',CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU17','ราเมงปิรันย่า',100,'ปิรันย่าจากแม่น้ำอเมซอนแท้',5.0,'https://s.isanook.com/tr/0/ud/283/1417145/;po.jpg','RES06',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU18','พะแนงเนื้อได้โนเสาร์',100,'เนื้อนำเข้าจาก Jurassic park 100%',5.0,'https://inwfile.com/s-dp/rwkcpd.jpg','RES06',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU19','ไข่นกกระจอกเทศทอด',100,'ไข่นกกระทอกเทศแท้ 100% ทอดกรอบๆ ไข่แดงเยิ้มๆ',5.0,'https://ik.imagekit.io/seproject/se/pava3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670997132076','RES06',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU20','ต้มอึ่งไข่',100,'อึ่งแท้จากหนองน้ำ รับรองความสด',5.0,'https://obs.line-scdn.net/0hwvlfoT6OKFlRHwLUV0FXDmtJKzZicztaNSl5Wg1xdm0uez8OPnhvbH0YIml8Km8HPyxgN3MfM2gsLGgNbS5v/w1200','RES06',CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU21','ไข่ตุ๋นต้มยำ',40,'อยากกินเฉยๆ เอาเลยค่ะได้หมด',5.0,'https://www.traffic-sharing.com/static/1528700523.jpg','RES05',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU22','ส้มตำปลาร้า',40,'แซ่บๆนัวๆ จากผงชูรส 1 ถัง',5.0,'https://lh3.googleusercontent.com/p/AF1QipMap2NxwowNzu3_l_lpWRSYgjqjmM9McVGRpQdL=w1080-h608-p-no-v0','RES05',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU23','ลาบไก่',40,'ไก่แท้ จากฟาม อานิษา นูฟีเบียร์ สิงสถิตย์',5.0,'https://siamcity.net/wp-content/uploads/2021/02/A29A3679-4DF7-46EC-9B54-A7421C6BEB99.jpeg','RES05',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU24','แกงอ่อม',40,'อร่อยนะเว้ย นัวๆ ของแท้ต้องร้านนี้ ผงชูรสทั้งโรงงาน',5.0,'https://s359.kapook.com/pagebuilder/1740a43c-314b-4436-a746-5c159f4f8451.jpg','RES05',CURRENT_TIMESTAMP());

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

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU37','นมเย็น(นมชมพู)',40,'นมผสมน้ำแดง',5.0,'https://www.bluemochatea.com/wp-content/uploads/2020/10/%E0%B8%99%E0%B8%A1%E0%B8%8A%E0%B8%A1%E0%B8%9E%E0%B8%B9.jpg','RES10',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU38','ชาเขียวนม',40,'ชาหอมๆ เขียวเพราะสีผสมอาหาร',5.0,'https://www.bluemochatea.com/wp-content/uploads/2020/01/%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AD%E0%B9%82%E0%B8%A3%E0%B8%A1%E0%B9%88%E0%B8%B2.jpg','RES10',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU39','ไมโลโรงเรียน',40,'ของแท้ต้องจากโรงเรียน',5.0,'https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/milo-iced-540x400.jpg?itok=y-i2eb_o','RES10',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU40','ชานมไข่มุก',40,'ไข่มุกแท้จากทะเล',5.0,'https://media.robinhood.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%A1850x480.jpg','RES10',CURRENT_TIMESTAMP());

INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU41','แกงไตปลา',40,'ไตปลาแท้จากทะเลเมดิเตอเรเนี้ย',5.0,'https://s.isanook.com/wo/0/rp/rc/w670h402/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMzQvMTcwNTYxL2Zvb2QuanBn.jpg','RES11',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU42','แกงเขียวหวานไก่',40,' - ',5.0,'https://www.เมนูฮิต.com/wp-content/uploads/2021/10/1kang-kee-wan-nuae-1200x630.jpg','RES11',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU43','แกงส้ม',40,'แกงส้มพร้อมเสริฟ',5.0,'https://img-global.cpcdn.com/recipes/4a148201773a7301/1200x630cq70/photo.jpg','RES11',CURRENT_TIMESTAMP());
INSERT INTO menu(menu_id,menu_name,price,detail,score,menu_picture,restaurant_id,menu_timestamp) 
VALUES ('MENU44','แกงจืดหมู',40,'เนื้อหมูแน่นๆ พร้อมกับสาหร่ายจากทะล',5.0,'https://www.eatandsleep.blog/wp-content/uploads/2021/01/SQ_EAS01731-1.webp','RES11',CURRENT_TIMESTAMP());

SELECT score FROM menu WHERE menu_id = 'MENU01';

INSERT INTO user(user_id,student_id,firstname,lastname,status,user_timestamp) VALUES ('USER01','63xxx000','name','lastname','defualt',CURRENT_TIMESTAMP());
INSERT INTO admin(admin_id,password,timestamps) VALUES ('ADMIN01','12345678910',CURRENT_TIMESTAMP());