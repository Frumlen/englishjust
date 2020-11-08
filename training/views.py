from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse

from .forms import MailForm


def main_request(request):
    if request.method == 'POST':
        form = MailForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('home')+'/#s3')
    else:
        form = MailForm()
    return render(request, 'index.html', {'form': form})