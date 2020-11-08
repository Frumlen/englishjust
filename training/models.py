from django.db import models

class MailRequest(models.Model):
    fio = models.CharField(max_length=4000, null=True, blank=True, verbose_name='ФИО')
    phone = models.CharField(max_length=4000, null=True, blank=True,verbose_name='Мобильный телефон')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
