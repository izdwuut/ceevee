from django.http import HttpResponse


def debug_response(request):
    return HttpResponse("This is a placeholder test response. You came to /debug.")

