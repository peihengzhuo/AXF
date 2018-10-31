from django.conf.urls import url, include

from axf import views

urlpatterns = [
    url(r'^$/', views.index, name='index'),
    url(r'^home/$', views.home, name='home'),
    url(r'^market/$', views.market, name='market'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^mine/$', views.mine, name='mine'),
]