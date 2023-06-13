import os
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from sendgrid.helpers.mail import Mail
from django.conf import settings
from sendgrid import SendGridAPIClient


class ContactUs(APIView):
    def post(self, request, *args, **kwargs):
        """
        Sends a message and name of the sender as mail to to your email that you have configured in settings.py as 'TO_EMAILS'.
        """
        email = request.data.get('email')
        name = request.data.get('name')
        message = request.data.get('message')
        if email and email != '':
            try:
                if email:
                    message = Mail(
                        from_email=os.getenv("TO_EMAILS"),
                        to_emails=os.getenv("TO_EMAILS"),
                        subject='Contact Us',
                        html_content='<strong>{}, {}, \n from: {}</strong>'.format(name, message, email))
                    try:
                        sg = SendGridAPIClient(os.getenv("SENDGRID_API_KEY"))
                        sg.send(message)
                    except Exception as e:
                        import json
                        return Response((str(e.to_dict["errors"])), status=e.status_code)
                    return Response({'message': "Your query has been sent to admin", 'status': status.HTTP_200_OK},
                                    status=status.HTTP_200_OK)
            except:
                return Response({'message': "Something went Wrong", 'status': status.HTTP_404_NOT_FOUND},
                                status=status.HTTP_404_NOT_FOUND)