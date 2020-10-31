from django.http import HttpResponse

def debugResponse(request):
    return HttpResponse("This is a placeholder test response. You came to /debug.")
