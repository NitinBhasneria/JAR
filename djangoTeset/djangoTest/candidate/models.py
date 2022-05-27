from django.db import models

# Create your models here.

class Candidate(models.Model):
    name = models.CharField(max_length =70, default='')
    status = models.CharField(max_length =70, default='Applied')
    email = models.CharField(max_length =70, default='')
    profile = models.CharField(max_length =70, default='')
    
    def __str__(self):
        return self.name

# class Info(models.Model):
#     candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE, primary_key = True)
    

#     def __str__(self):
#         return self.email

class Professional(models.Model):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    company = models.CharField(max_length=100, default='')
    years = models.IntegerField()

class Academics(models.Model):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    school = models.CharField(max_length=100)
    passYear = models.IntegerField()