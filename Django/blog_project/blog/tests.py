from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from .models import Post

class BlogTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = get_user_model().objects.create_user(username='testuser', password='testpassword')
        cls.post = Post.objects.create(title='Test Post', author=cls.user, body='This is a test post body.')

    def test_post_model(self):
        post = Post.objects.get(id=self.post.id)
        self.assertEqual(post.title, 'Test Post')
        self.assertEqual(post.author, self.user)
        self.assertEqual(post.body, 'This is a test post body.')

    def test_url_list_view(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home.html')

    def test_url_detail_view(self):
        # Existing post
        response = self.client.get(reverse('post_detail', kwargs={'pk': self.post.pk}))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'post_detail.html')

        # Non-existent post
        response = self.client.get(reverse('post_detail', kwargs={'pk': 9999}))
        self.assertEqual(response.status_code, 404)

    def test_post_list_view(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home.html')

    def test_post_detail_view(self):
        # Existing post
        response = self.client.get(reverse('post_detail', kwargs={'pk': self.post.pk}))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'post_detail.html')

        # Non-existent post
        response = self.client.get(reverse('post_detail', kwargs={'pk': 9999}))
        self.assertEqual(response.status_code, 404)

    def test_create_post_view(self):
        response = self.client.post(reverse('post_new'), {'title': 'New Post', 'author': self.user.pk, 'body': 'Test body'})
        self.assertEqual(response.status_code, 302)  # Redirects after successful form submission

    def test_update_post_view(self):
        response = self.client.post(reverse('post_edit', kwargs={'pk': self.post.pk}), {'title': 'Updated Post', 'author': self.user.pk, 'body': 'Updated body'})
        self.assertEqual(response.status_code, 302)  # Redirects after successful form submission

    def test_delete_post_view(self):
        response = self.client.post(reverse('post_delete', kwargs={'pk': self.post.pk}))
        self.assertEqual(response.status_code, 302)  # Redirects after successful deletion