from django.urls import path
from . import views

# urlpatterns = [
#     path('', views.book_list, name='book_list'),
#     path('view/<int:pk>', views.book_view, name='book_view'),
#     path('create/', views.book_create, name='book_create'),
#     path('update/<int:pk>', views.book_update, name='book_update'),
#     path('delete/<int:pk>', views.book_delete, name='book_delete'),
# ]

urlpatterns = [
    path('', views.BookList.as_view(), name='book_list'),
    path('view/<int:pk>', views.BookView.as_view(), name='book_view'),
    path('create/', views.BookCreate.as_view(), name='book_create'),
    path('update/<int:pk>', views.BookUpdate.as_view(), name='book_update'),
    path('delete/<int:pk>', views.BookDelete.as_view(), name='book_delete'),
]
