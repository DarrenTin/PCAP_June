from django.test import SimpleTestCase
from django.urls import reverse

class BookCreateTest(SimpleTestCase):
    def test_book_create_status_code(self):
        response = self.client.get(reverse('book_create'))
        self.assertEqual(response.status_code, 200)