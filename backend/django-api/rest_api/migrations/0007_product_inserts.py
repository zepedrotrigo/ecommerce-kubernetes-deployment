import requests, psycopg2
from django.db import migrations, transaction
from rest_api.models import Product
from io import BytesIO
from PIL import Image

# ---------------------------------------------------------------------------- #
#                                     Utils                                    #
# ---------------------------------------------------------------------------- #
def download_and_convert_image_to_jpeg(url):
    response = requests.get(url)
    
    # Convert the image to JPEG format
    image = Image.open(BytesIO(response.content))
    image = image.convert('RGB')
    jpeg_buffer = BytesIO()
    image.save(jpeg_buffer, format='JPEG')
    jpeg_buffer.seek(0)

    return jpeg_buffer.read()

# ---------------------------------------------------------------------------- #
#                                  Migrations                                  #
# ---------------------------------------------------------------------------- #
def add_initial_data(apps, schema_editor):
    with transaction.atomic():
        Product.objects.create(title='Nike Air Max Plus OG', 
            description='The Jordan 1 Retro High Black Gym Red borrows a design and color scheme from the original Air Jordan 1. However, this sneaker boasts a shorter silhouette and red accents instead of a black-and-red upper. Nike released the Jordan 1 Retro High Black Gym Red in 2019 after launching sixty Air Jordan 1 colorways in 2018, then several more colorways in the following year.\nShiny black overlays wrap around the white leather upper. The winged Air Jordan logo stands out brightly against the black leather. A red Nike swoosh logo appears on the side, accentuated by the red leather at the ankle.\nJordan 1 Retro High Black Gym Red released in June of 2019 and retailed for $160.',
            category='Sneaker',
            price=200,
            thumbnail=download_and_convert_image_to_jpeg('https://cdn.shopify.com/s/files/1/0933/1060/products/nike-air-max-plus-og-varsity-red-gold-raspberry-red-black-dx0755-600_1800x1800.jpg?v=1677870663'),
            stock=10,
            condition='Good',
            rating=4
        )

        Product.objects.create(title='Nike Air Max Plus W', 
            description='Travis Scott closed out 2022 with the return of his signature Jordan 1 Low, this time in a new Black Phantom colorway.\nThe silhouette returned with his signature backwards Nike Swoosh but with a new contrast stitch design. The all black nubuck sneakers feature a Nike Air logo on the tongue and an Air Jordan Wings logo on the right heel tab. Red, Black, and White/Black laces are included and an embroidered Bee is located on the heel tab of the left sneaker inspired by Travis’ daughter, Stormi.\nThe Air Jordan 1 Retro Low OG SP Travis Scott Black Phantom released December 15, 2022 with a retail price of $150.',
            category='Sneaker',
            price=611,
            thumbnail=download_and_convert_image_to_jpeg('https://cdn.shopify.com/s/files/1/0933/1060/products/nike-air-max-plus-sandrift-sail-pink-oxford-black-dz3671-102_1800x1800.jpg?v=1679605039'),
            stock=2,
            condition='Excellent',
            rating=4
        )
        Product.objects.create(title='Nike Air Jordan 1 Retro High OG Gym Red', 
            description='The Jordan 1 Retro High Black Gym Red borrows a design and color scheme from the original Air Jordan 1. However, this sneaker boasts a shorter silhouette and red accents instead of a black-and-red upper. Nike released the Jordan 1 Retro High Black Gym Red in 2019 after launching sixty Air Jordan 1 colorways in 2018, then several more colorways in the following year.\nShiny black overlays wrap around the white leather upper. The winged Air Jordan logo stands out brightly against the black leather. A red Nike swoosh logo appears on the side, accentuated by the red leather at the ankle.\nJordan 1 Retro High Black Gym Red released in June of 2019 and retailed for $160.',
            category='Sneaker',
            price=200,
            thumbnail=download_and_convert_image_to_jpeg('https://images.stockx.com/images/Air-Jordan-1-Retro-High-Black-Gym-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607656744'),
            stock=10,
            condition='Good',
            rating=4
        )
        Product.objects.create(title='Air Jordan 1 Mid Lakers (2022)', 
            description='The Jordan 1 Retro High Black Gym Red borrows a design and color scheme from the original Air Jordan 1. However, this sneaker boasts a shorter silhouette and red accents instead of a black-and-red upper. Nike released the Jordan 1 Retro High Black Gym Red in 2019 after launching sixty Air Jordan 1 colorways in 2018, then several more colorways in the following year.\nShiny black overlays wrap around the white leather upper. The winged Air Jordan logo stands out brightly against the black leather. A red Nike swoosh logo appears on the side, accentuated by the red leather at the ankle.\nJordan 1 Retro High Black Gym Red released in June of 2019 and retailed for $160.',
            category='Sneaker',
            price=250,
            thumbnail=download_and_convert_image_to_jpeg('https://img.hypeboost.com/products/air-jordan-1-mid-lakers-2022/w900/img01.jpg'),
            stock=6,
            condition='Good',
            rating=5
        )
        Product.objects.create(title='Yeezy Foam Runner Carbon', 
            description='Kanye West purposefully created a slip-on lifestyle silhouette for the Yeezy Foam Runner that is both comfy and eco-friendly. The sneaker has no laces. The one-piece foam upper features foam derived from environmentally friendly algae and a porous structure.',
            category='Sneaker',
            price=450,
            thumbnail=download_and_convert_image_to_jpeg('https://img.hypeboost.com/products/adidas-yeezy-foam-rnr-mx-carbon/w900/img01.jpg'),
            stock=8,
            condition='Good',
            rating=5
        )
        Product.objects.create(title='Air Jordan 3 Racer Blue', 
            description='The Air Jordan 3 was a groundbreaking shoe that introduced several new features and designs, and was also associated with Michael Jordan\'s on-court success. It has become a classic shoe that continues to be re-released in various colorways.',
            category='Sneaker',
            price=420,
            thumbnail=download_and_convert_image_to_jpeg('https://img.hypeboost.com/products/air-jordan-3-retro-racer-blue/w900/img01.jpg'),
            stock=9,
            condition='Good',
            rating=4
        )
        Product.objects.create(title='Air Jordan 1 Mid Ice Blue GS', 
            description='A rebellious spirit & sports expertise defines the international powerhouse. The Nike Air Jordan 1 range is as striking as they are supportive.',
            category='Sneaker',
            price=250,
            thumbnail=download_and_convert_image_to_jpeg('https://img.hypeboost.com/products/air-jordan-1-mid-ice-blue-gs/w900/img01.jpg'),
            stock=2,
            condition='Good',
            rating=3
        )
        Product.objects.create(title='Air Jordan 1 Retro Low Travis Scott Olive', 
            description='A rebellious spirit & sports expertise defines the international powerhouse. The Nike Air Jordan 1 range is as striking as they are supportive.',
            category='Sneaker',
            price=1200,
            thumbnail=download_and_convert_image_to_jpeg('https://www.copncop.com/1585-large_default/air-jordan-1-retro-low-og-sp-travis-scott-olive.jpg'),
            stock=2,
            condition='Good',
            rating=3
        )
        Product.objects.create(title='Nike React Hyperdunk 2017 Flyknit Off-White', 
            description='The partnership between Nike and Off-White has resulted in several iconic sneaker releases, including the Air Jordan 1, Air Presto, and Air VaporMax. These sneakers feature unique design elements that are characteristic of Virgil Abloh\'s style, such as the use of quotation marks around words and phrases on the shoes, as well as the signature Off-White diagonal stripes.',
            category='Sneaker',
            price=1700,
            thumbnail=download_and_convert_image_to_jpeg('https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/928/598/original/249946_01.jpg.jpeg?action=crop&width=600'),
            stock=2,
            condition='Good',
            rating=3
        )

class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0006_product_rating'),
    ]

    operations = [
        migrations.RunPython(add_initial_data),
    ]