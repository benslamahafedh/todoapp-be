const db=require('database_connection');
db.insert (`INSERT INTO tasks (1,'yh','h',NOW(),'t','h')`);
db.getData('SELECT * FROM tasks');