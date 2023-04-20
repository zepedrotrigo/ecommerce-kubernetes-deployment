import requests
from django.db import migrations, transaction
from rest_api.models import Product

def add_initial_data(apps, schema_editor):
    with transaction.atomic():
        thumbnail1_url = 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Black-Gym-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607656744'
        response = requests.get(thumbnail1_url)
        thumbnail1_data = memoryview(response.content)
        Product.objects.create(title='Nike Air Jordan 1 Retro High OG Gym Red', 
            description='The Jordan 1 Retro High Black Gym Red borrows a design and color scheme from the original Air Jordan 1. However, this sneaker boasts a shorter silhouette and red accents instead of a black-and-red upper. Nike released the Jordan 1 Retro High Black Gym Red in 2019 after launching sixty Air Jordan 1 colorways in 2018, then several more colorways in the following year.\nShiny black overlays wrap around the white leather upper. The winged Air Jordan logo stands out brightly against the black leather. A red Nike swoosh logo appears on the side, accentuated by the red leather at the ankle.\nJordan 1 Retro High Black Gym Red released in June of 2019 and retailed for $160.',
            category='Sneaker',
            price=200,
            thumbnail=thumbnail1_data,
            stock=10,
            condition='Good',
            rating=4
        )
        thumbnail2_url = 'https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Black-Phantom-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1671732011&q=75'
        response = requests.get(thumbnail2_url)
        thumbnail2_data = memoryview(response.content)
        Product.objects.create(title='Nike Air Jordan 1 Retro Low OG SP Travis Scott Black Phantom', 
            description='Travis Scott closed out 2022 with the return of his signature Jordan 1 Low, this time in a new Black Phantom colorway.\nThe silhouette returned with his signature backwards Nike Swoosh but with a new contrast stitch design. The all black nubuck sneakers feature a Nike Air logo on the tongue and an Air Jordan Wings logo on the right heel tab. Red, Black, and White/Black laces are included and an embroidered Bee is located on the heel tab of the left sneaker inspired by Travis’ daughter, Stormi.\nThe Air Jordan 1 Retro Low OG SP Travis Scott Black Phantom released December 15, 2022 with a retail price of $150.',
            category='Sneaker',
            price=611,
            thumbnail=thumbnail2_data,
            stock=2,
            condition='Excellent',
            rating=4
        )

class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0006_product_rating'),
    ]

    operations = [
        migrations.RunPython(add_initial_data),
    ]