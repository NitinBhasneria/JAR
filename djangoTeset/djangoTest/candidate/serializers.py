from rest_framework import serializers
from .models import Candidate, Professional, Academics

class CandidateSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Candidate
        fields = '__all__'

# class InfoSerializer(serializers.ModelSerializer):
#     class Meta: 
#         model = Info
#         fields = '__all__'

class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professional
        fields = '__all__'
    
class AcademicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Academics
        fields = '__all__'