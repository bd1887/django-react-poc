from django.core.management.base import BaseCommand
import pyodbc

class Command(BaseCommand):
    help = 'Print all rows from tbl_D17125388'

    def handle(self, *args, **kwargs):
        self.print_all_rows()

    def print_all_rows(self):

        cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=natheandemos.database.windows.net;DATABASE=RianProjectDB1;UID=DIT265A_USR;PWD=479M1LZ5Uk')
        cursor = cnxn.cursor()
        # get one record from the database and print it 
        cursor.execute("select * from tbl_D17125388")
        rows = cursor.fetchall()
        for row in rows:
            print(row)