from django.test import SimpleTestCase
from django.urls import reverse

class HomePageTest(SimpleTestCase):
    def test_homepage_status_code(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        
    def test_url_available_by_name(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        
    def test_template_name_correct(self):
        response = self.client.get(reverse('home'))
        self.assertTemplateUsed(response, 'home.html')
        
    def test_homepage_contains_correct_html(self):
        response = self.client.get(reverse('home'))
        self.assertContains(response, '<h1>Welcome to the Home Page</h1>')

class AboutPageTest(SimpleTestCase):
    def test_aboutpage_status_code(self):
        response = self.client.get(reverse('about'))
        self.assertEqual(response.status_code, 200)
        
    def test_url_available_by_name(self):
        response = self.client.get(reverse('about'))
        self.assertEqual(response.status_code, 200)
        
    def test_template_name_correct(self):
        response = self.client.get(reverse('about'))
        self.assertTemplateUsed(response, 'about.html')
        
    def test_aboutpage_contains_correct_html(self):
        response = self.client.get(reverse('about'))
        self.assertContains(response, '<h1>About Us</h1>')
