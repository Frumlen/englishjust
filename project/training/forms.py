from django import forms
from training.models import MailRequest


class MailForm(forms.ModelForm):
    class Meta:
        model = MailRequest
        fields = ('fio', 'phone',)