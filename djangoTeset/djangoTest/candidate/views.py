from rest_framework import mixins
from .models import Academics, Candidate, Professional
from rest_framework import generics
from .serializers import AcademicsSerializer, CandidateSerializer, ProfessionalSerializer

# Create your views here.
class CandidateList(generics.ListCreateAPIView):
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all()

class CandidateDetail(generics.UpdateAPIView):
    serializer_class = CandidateSerializer
    lookup_url_kwarg = 'pk'
    lookup_field = 'id'
    queryset = Candidate.objects.all()

class CreateProfView(generics.ListCreateAPIView):
    serializer_class = ProfessionalSerializer
    def get_queryset(self):
        pk = self.kwargs['pk']
        queryset = Professional.objects.filter(candidate = pk)
        return queryset

class CreateAcadView(generics.ListCreateAPIView):
    serializer_class = AcademicsSerializer
    def get_queryset(self):
        pk = self.kwargs['pk']
        queryset = Academics.objects.filter(candidate = pk)
        return queryset

# class CandidateDetails(generics.ListCreateAPIView):
#     serializer_class = InfoSerializer
#     def get_queryset(self):
#         cid = self.kwargs['pk']
#         queryset = Info.objects.filter(candidate=cid)
#         return queryset 
# class ProfessionalDestroyView(generics.DestroyAPIView):
#     serializer_class = ProfessionalSerializer
#     lookup_url_kwarg = 'pk'
#     lookup_field = 'id'
#     queryset = Professional.objects.all()  
# class AcademicsDestroyView(generics.DestroyAPIView):
#     serializer_class = AcademicsSerializer
#     lookup_url_kwarg = 'pk'
#     lookup_field = 'id'
#     queryset = Academics.objects.all()
