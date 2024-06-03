from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    def __str__(self):
        return self.user.username

class Author(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name
        
# class Book(models.Model):
#     title = models.CharField(max_length=100)
#     author = models.ForeignKey(Author, on_delete=models.CASCADE)
#     def __str__(self):
#         return self.title

# class Book(models.Model):
#     title = models.CharField(max_length=100)
#     genre = models.ManyToManyField(Genre)
#     def __str__(self):
#         return self.title

# class Book(models.Model):
#     title = models.CharField(max_length=100)
#     author = models.ForeignKey(Author, on_delete=models.PROTECT)
#     def __str__(self):
#         return self.title


class Book(models.Model):
    title = models.CharField(max_length=100)
    publication_date = models.DateField()
    authors = models.ForeignKey(Author, on_delete=models.CASCADE) # an author has many books
    pages = models.IntegerField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    
    def __str__(self):
        return self.title

class Genre(models.Model):
    name = models.CharField(max_length=50)
    books = models.ManyToManyField(Book)
    def __str__(self):
        return self.name
