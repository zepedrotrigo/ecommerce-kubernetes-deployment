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
        Product.objects.create(title='Nike Air Max Plus OG', 
            description='The Jordan 1 Retro High Black Gym Red borrows a design and color scheme from the original Air Jordan 1. However, this sneaker boasts a shorter silhouette and red accents instead of a black-and-red upper. Nike released the Jordan 1 Retro High Black Gym Red in 2019 after launching sixty Air Jordan 1 colorways in 2018, then several more colorways in the following year.\nShiny black overlays wrap around the white leather upper. The winged Air Jordan logo stands out brightly against the black leather. A red Nike swoosh logo appears on the side, accentuated by the red leather at the ankle.\nJordan 1 Retro High Black Gym Red released in June of 2019 and retailed for $160.',
            category='Sneaker',
            price=200,
            thumbnail=load_and_convert_image_to_jpeg("sample.jpg"),
            stock=10,
            condition='Good',
            rating=4
        )

class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0006_product_rating'),
    ]

    operations = [
        migrations.RunPython(add_initial_data),
    ]