from django.contrib import admin
from training.models import MailRequest


class AdminMailRequest(admin.ModelAdmin):
    search_fields = ['fio', 'phone']
    list_filter = ['created']
    list_display = ['fio', 'phone', 'created',]

admin.site.register(MailRequest, AdminMailRequest)
