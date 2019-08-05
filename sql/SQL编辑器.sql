create database project

create table usertable(
             username varchar(25) primary key,
             userpass varchar(20) not null
);

--插入数据
insert into usertable(username,userpass) values ('qq123456','123456');
insert into usertable(username,userpass) values ('250715875@qq.com','123456');
insert into usertable(username,userpass) values ('18309291234','123456');





--查询数据

select * from usertable;


--删除数据
delete from usertable;

delete from usertable where usersex='女';

--修改数据

update usertable set usersex='女' where usersex='男'


---------------------
---创建会员表
create table vip(
       username varchar(20) primary key,
       userpass varchar(16) not null,
       sex char(2),
       userphone char(11)
);

select * from vip;




