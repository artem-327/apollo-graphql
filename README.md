# react url-short front-end

### Prepare DB
```
Before starting, please download backend source from 
https://github.com/artyomDev/react-urlshort-backend
and run it on your localhost.
```

### Project setup
```
yarn install
```

### Run server
```
yarn start
```


### Live demo

https://artem-react-url.herokuapp.com/

```
Thank you
Artem Medianyk
```


## Shortster

We're looking forward to launching an URL shortening service, so that users may have custom URLs to their profiles.

User stories:

As  a user, I want to share a long URL as a short URL so it's easier to copy/paste in emails.
As a user, sometimes I will want to customize the short URL so that I can recall what URL it is referencing
As a user, I will want to see a report of my short URLs, when I created it, and how many times it was clicked.

Here are its specifications:
A user can submit a URL and receive a unique shortcode in response.
A user can submit a URL and shortcode and will receive the chosen shortcode if it is available.
A user can access a /<shortcode> endpoint and be redirected to the URL associated with that shortcode, if it exists.
All shortcodes can contain digits, upper case letters, and lowercase letters. It is case sensitive.
Automatically generated shortcodes are exactly 6 characters long.
User submitted shortcodes must be at least 4 characters long.
A user can access a /<shortcode>/stats endpoint in order to see when the shortcode was registered, when it was last accessed, and how many times it was accessed.

## Technical specifications

You are free to use whichever technology you feel most comfortable with, as long as you feel that it's the best tool for the job. 

Here's what we want to see:

A README file with setup instructions.
Good testing practices.
Clean code (of course).
A git repository with clean commit history.
Good REST practices.
Here's what we may or may not want to see:
You may use a database (relational or not), or store everything in memory.
You may develop a frontend for the service, or keep it as merely an API.
