# Localmart


## [https://localmart.netlify.app/]


## Description


**LocalMart es una plataforma digital que conecta a los consumidores con los negocios locales de su comunidad.**.


#### [https://github.com/Marcocar97/localmart-client]

#### [https://github.com/Marcocar97/localmart-server]


## Technologies & Libraries used


**NOTE -**LocalMart fue construido utilizando las siguientes tecnologías:

React, React Router, Material-UI (MUI), Axios, Styled Components


## Backlog Functionalities


**NOTE -** Expansión de Funcionalidades: Implementación de notificaciones personalizadas y reseñas de usuarios.

App Móvil: Adaptar LocalMart a dispositivos móviles para una experiencia más completa.

Marketing: Ampliar la base de usuarios y comerciantes a través de estrategias de marketing digital.



# Client Structure


## User Stories


**NOTE:** List here all the actions a user can do in the app. Example:


- **404** - As a user, I want to see a friendly 404 page when I go to a page that doesn’t exist so that I know it was my fault.

- **500** - As a user, I want to see a friendly error page when there is a server issue so that I know it is not my fault.

- **homepage** - As a user, I want to be able to access the homepage so that I see what the app is about and have options to log in and sign up.

- **sign up** - As a user, I want to sign up on the webpage so that I can register and access all features.

- **login** - As a user, I want to be able to log in on the webpage so that I can access my account.

- **logout** - As a user, I want to be able to log out from the webpage so that I can ensure my account is secure.

- **business list** - As a user, I want to see a list of all businesses so that I can explore different options.

- **business profile** - As a user, I want to view detailed profiles of businesses so that I can get more information.

- **create offer** - As a business owner, I want to create offers so that I can attract more customers.

- **view offers** - As a user, I want to see offers from businesses so that I can take advantage of deals.

- **update profile** - As a user or business owner, I want to update my profile information so that it reflects my current details.


## Client Routes


**NOTE:** Use the below table to list your frontend routes.


### React Router Routes (React App)


| Path                  | Page               | Components          | Permissions              | Behavior                                                        |

|-----------------------|-------------------- |--------------------- |-------------------------- |-----------------------------------------------------------------|

| `/`                   | Home                | Navbar, Footer       | Public                   | Home page                                                        |

| `/signup`             | Signup              | SignupForm           | Anonymous only `<IsAnon>` | Signup form, link to login, navigate to homepage after signup    |

| `/login`              | Login               | LoginForm            | Anonymous only `<IsAnon>` | Login form, link to signup, navigate to homepage after login     |

| `/profile`            | Profile             | ProfileForm          | User only `<IsPrivate>`  | View and edit user profile, navigate to homepage after logout    |

| `/businesses`         | BusinessesList      | BusinessCard         | Public                   | List of all businesses                                           |

| `/business/:id`       | BusinessProfile     | BusinessDetails      | Public                   | Detailed view of a single business profile                       |

| `/offers/create`      | CreateOffer         | OfferForm            | Business only `<IsBusiness>` | Form to create a new offer                                       |

| `/offers/:id`         | OfferDetails        | OfferDetails         | Public                   | Detailed view of a specific offer                                |

| `/profile/edit`       | EditProfile         | EditProfileForm      | User only `<IsPrivate>`  | Form to edit user profile                                       |

| `/business/edit`      | EditBusiness        | EditBusinessForm     | Business only `<IsBusiness>` | Form to edit business profile                                    |

| `/offers`             | OffersList          | OfferCard            | Public                   | List of all available offers                                    |


## Other Components


- **Navbar** - Navigation bar for accessing different parts of the app.

- **Footer** - Footer with additional links and information.


## Services


- **Auth Service**

  - `auth.login(user)` - Authenticates a user and returns a token.

  - `auth.signup(user)` - Registers a new user.

  - `auth.verify()` - Verifies the user’s token.


- **Business Service**

  - `business.list()` - Retrieves a list of all businesses.

  - `business.profile(id)` - Retrieves the profile of a specific business.

  - `business.update(id, data)` - Updates business profile information.

  - `business.delete(id)` - Deletes a business profile.


- **Offer Service**

  - `offer.create(data)` - Creates a new offer.

  - `offer.list()` - Retrieves a list of all offers.

  - `offer.details(id)` - Retrieves details of a specific offer.

  - `offer.update(id, data)` - Updates a specific offer.

  - `offer.delete(id)` - Deletes a specific offer.


## Context


- **Auth Context**

  - Manages user authentication state and user information.


- **Theme Context**

  - Manages the theme of the application, allowing for dynamic styling based on user preferences or system settings.


## Links

### Created by


[Marcos Cardoza - www.github.com/Marcocar97]


### Project


[https://github.com/Marcocar97/localmart-client]


[https://github.com/Marcocar97/localmart-serve]


[https://localmart.netlify.app/]


### Slides


[https://www.canva.com/design/DAGN_4KYMas/fY-J7Z_5SelV_cXszDHWWw/edit?utm_content=DAGN_4KYMas&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton]


