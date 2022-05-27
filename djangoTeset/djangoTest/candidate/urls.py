from django.urls import path
from candidate import views

urlpatterns = [ 
    path('api/candidate/', views.CandidateList.as_view()),
    path('api/candidate/<pk>/', views.CandidateDetail.as_view()),
    path('api/acad/<pk>/', views.CreateAcadView.as_view()),
    path('api/prof/<pk>/', views.CreateProfView.as_view())
]
