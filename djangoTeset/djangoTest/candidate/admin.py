from django.contrib import admin

from .models import Academics, Candidate, Professional

admin.site.register(Candidate)
# admin.site.register(Info)
admin.site.register(Professional)
admin.site.register(Academics)