import requests, psycopg2
from django.db import migrations, transaction
from rest_api.models import Product
from io import BytesIO
from PIL import Image
import os

# ---------------------------------------------------------------------------- #
#                                     Utils                                    #
# ---------------------------------------------------------------------------- #
def load_and_convert_image_to_jpeg(img_path):
    img_path = os.path.join(os.path.dirname(__file__), img_path)

    # Load the image from the file system
    with open(img_path, 'rb') as f:
        image = Image.open(f)
        image = image.convert('RGB')
        jpeg_buffer = BytesIO()
        image.save(jpeg_buffer, format='JPEG')
        jpeg_buffer.seek(0)

    return jpeg_buffer.read()

# ---------------------------------------------------------------------------- #
#                                  Migrations                                  #
# ---------------------------------------------------------------------------- #
def add_initial_data(apps, schema_editor):
    # Get the path to the image file
    with transaction.atomic():
        Product.objects.create(title='Nike Air Max Plus OG Hyper Blue (2018)', 
            description='Calling all sneakerheads to get hype like never before for these Air Max Plus OG Hyper Blue (2018). This Air Max Plus comes with a blue upper with black accents, yellow Nike "Swoosh", black midsole with white and blue accents, and a black sole. These sneakers released in December 2018 and retailed for $160. This historic sneaker is sure to rise so place your bid on StockX now.',
            category='Sneaker',
            price=263,
            thumbnail=load_and_convert_image_to_jpeg("air_max_plus_og_hyper_blue.jpg"),
            stock=10,
            condition='Good',
            rating=4
        )

        Product.objects.create(title='Jordan 1 Retro Low OG SP', 
            description='The Air Jordan 1 Low OG SP Travis Scott Olive is constructed with white leather and black nubuck uppers. Travis continued to use his signautre reverse style Nike Swoosh, in an olive green colorway. The limited edition sneakers have an aged midsole that sits on top of an olive green outsole.',
            category='Sneaker',
            price=988,
            thumbnail=load_and_convert_image_to_jpeg("travis_scott_olive_green.jpg"),
            stock=3,
            condition='Excellent',
            rating=5
        )

        Product.objects.create(title='Jordan 4 Retro SE Black Canvas', 
            description='This Black Canvas Air Jordan is a mid-top sneaker with a black canvas upper complemented by a gray tonal suede which covers the eyelets and forefoot overlays. A gray Jumpman logo graces the heel and woven tongue tag, with the latter getting a crimson Flight logo. The sneaker also rides on a two-tone polyurethane midsole with visible Air-sole cushioning in the heel.',
            category='Sneaker',
            price=350,
            thumbnail=load_and_convert_image_to_jpeg("aj4_black_canvas.jpg"),
            stock=7,
            condition='Good',
            rating=4
        )

        Product.objects.create(title='Nike Air Force 1 Supreme White', 
            description='Supreme and Nike paid homage to an NYC classic with the release of the Nike Air Force 1 Low Supreme White, now available on StockX. This collaboration adds Supreme’s world-renowned Box Logo to the side of a traditional all-white Air Force 1 design.',
            category='Sneaker',
            price=160,
            thumbnail=load_and_convert_image_to_jpeg("af1_supreme.jpg"),
            stock=20,
            condition='Good',
            rating=4
        )

        Product.objects.create(title='Jordan 1 Retro High OG SP Travis Scott',
            description='The Air Jordan 1 Travis Scott features a white leather upper with Mocha suede overlays and black leather reversed Swooshes. Hits of red on the tongue slightly contrast the designs earth tones. On the heel, a debossed Cactus Jack logo adds a custom feel. From there, a yellowed midsole and matching Mocha outsole complete the design.',
            category='Sneaker',
            price=1422,
            thumbnail=load_and_convert_image_to_jpeg("aj1_high_travis_scott.jpg"),
            stock=3,
            condition='Excellent',
            rating=5
        )

class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0006_product_rating'),
    ]

    operations = [
        migrations.RunPython(add_initial_data),
    ]