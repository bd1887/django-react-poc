from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Just a test'

    def handle(self, *args, **kwargs):
        msg1 = kwargs['msg1']
        msg2 = kwargs['msg2']
        self.test_func(msg1)

    def test_func(self, msg):
        self.stdout.write("Here is your message: ")
        self.stdout.write(msg)

    def add_arguments(self, parser):
        parser.add_argument('--msg1', type=str)
        parser.add_argument('--msg2', type=str)