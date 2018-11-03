from django.shortcuts import render

# Create your views here.
from axf.models import Wheel, Nav, Mustbuy, Shop, MainShow, Foodtypes, Goods


def home(request):
    # 首页
    wheels = Wheel.objects.all()
    navs = Nav.objects.all()
    mustbuys = Mustbuy.objects.all()

    # 商品部分
    shopList = Shop.objects.all()
    shophead = shopList[0]
    shoptab = shopList[1:3]
    shopclass = shopList[3:7]
    shopcommend = shopList[7:11]

    # 商品主体内容
    mainshows = MainShow.objects.all()
    data = {
        'wheels': wheels,
        'navs': navs,
        'mustbuys': mustbuys,
        'shophead': shophead,
        'shoptab': shoptab,
        'shopclass': shopclass,
        'shopcommend': shopcommend,
        'mainshows': mainshows

    }

    return render(request, 'home/home.html', context=data)


def market(request, categoryid, childid, sortid):
    foodtypes = Foodtypes.objects.all()

    typeIndex = int(request.COOKIES.get('typeIndex', 0))
    categoryid = foodtypes[typeIndex].typeid

    childtypenames = foodtypes.get(typeid=categoryid).childtypenames
    childTypleList = []
    for item in childtypenames.split('#'):
        arr = item.split(':')
        dir = {
            'childname': arr[0],
            'childid': arr[1]
        }
        childTypleList.append(dir)

    if childid == '0':
        goodsList = Goods.objects.filter(categoryid=categoryid)
    else:
        goodsList = Goods.objects.filter(categoryid=categoryid, childcid=childid)


    if sortid == '1':
        goodsList = goodsList.order_by('-productnum')
    elif sortid == '2':
        goodsList = goodsList.order_by('price')
    elif sortid == '3':
        goodsList = goodsList.order_by(('-price'))

    data = {
        'foodtypes':foodtypes,
        'goodsList':goodsList,
        'childTypleList': childTypleList,
        'categoryid':categoryid,
        'childid': childid,
    }

    return render(request, 'market/market.html', context=data)


def cart(request):
    return render(request, 'cart/cart.html')


def mine(request):
    return render(request, 'mine/mine.html')






