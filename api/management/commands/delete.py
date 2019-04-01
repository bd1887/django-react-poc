from django.core.management.base import BaseCommand
import pyodbc

class Command(BaseCommand):
    help = 'Delete --id from table'

    def handle(self, *args, **kwargs):
        row_id = kwargs['id']
        self.delete(row_id)

    def delete(self, row_id):
        try:
            cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=natheandemos.database.windows.net;DATABASE=RianProjectDB1;UID=DIT265A_USR;PWD=479M1LZ5Uk')
            cursor = cnxn.cursor()
            sql = f"DELETE FROM tbl_D17125388 WHERE id = {row_id}"
            cursor.execute(sql)
            cnxn.commit()
            print(f"Successfully deleted id {row_id} from table!")
        except Exception as e:
            print(e)

    def add_arguments(self, parser):
        parser.add_argument('--id', type=int)