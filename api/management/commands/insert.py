from django.core.management.base import BaseCommand
import pyodbc

class Command(BaseCommand):
    help = 'Insert --name argument into tbl_D17125388'

    def handle(self, *args, **kwargs):
        row_id = kwargs['id']
        name = kwargs['name']
        age = kwargs['age']
        role = kwargs['role']

        self.insert(row_id, name, age, role)

    def insert(self, row_id, name, age, role):
        try: 
            cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=natheandemos.database.windows.net;DATABASE=RianProjectDB1;UID=DIT265A_USR;PWD=479M1LZ5Uk')
            cursor = cnxn.cursor()
            sql = f"insert into tbl_D17125388(id, name, age, role) values ({row_id}, '{name}', {age}, '{role}')"
            cursor.execute(sql)
            cnxn.commit()
            print(f"Successfully inserted {name} into table!")
        except Exception as e:
           print(e)

    def add_arguments(self, parser):
        parser.add_argument('--id', type=int)
        parser.add_argument('--name', type=str)
        parser.add_argument('--age', type=int)
        parser.add_argument('--role', type=str)