# NextGenCrypto

## Projektbeschreibung

**NextGenCrypto** is a collection of cryptographic algorithms and implementations focused on post-quantum cryptography.
The goal of this project is to provide an easy-to-understand and accessible platform for exploring modern cryptographic methods that are resistant to quantum computer attacks.

This project was developed as part of a Master's program in the course "Cryptographic Algorithms" and offers an introduction to various post-quantum cryptography techniques, such as Kyber, Dilithium, and more.

Part of this project is also a tool that takes your URL, checks it, and provides tips on how to make it PQC-ready. However, this tool is still very experimental and stores data about you. 
**Please use it only if you agree to this***

## Installation

### Voraussetzungen

Before you start the project, make sure you have the following dependencies installed on your system:

- **Docker**: Version 20.10 or higher
- **Python**: Version 3.8 or higher
- **pip**: Python package manager

### Steps

1. Clone the Repository:
   ```bash
   git clone https://github.com/ShadowDataNerd/NextGenCrypto.git

3. Build and start the Docker image:
  ```bash
cd NextGenCrypto

5. Navigate to the project directory:
  ```bash
docker-compose up --buildgit

### Algorithms

1. Kyber – An encryption-based algorithm from the NIST PQC competition, considered resilient against quantum computer attacks.
2. Dilithium – A digital signature scheme, also emerging from the NIST competition, offering high efficiency in signature generation.
3. Additional algorithms – If new algorithms are released, they will be added to the list.


### Contributions
Contributions to this project are welcome. If you find bugs, want to suggest new features, or would like to contribute in other ways, please create an issue or submit a pull request.


# Private Use License

Copyright (c) [2024] [Christopher Otto]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to use
the Software for personal, non-commercial use only.

The following restrictions apply:
1. The Software may not be used for any commercial purposes.
2. The Software may not be distributed, sublicensed, or resold without the explicit
   permission of the copyright holder.
3. Modification and use of the Software in private projects is permitted, but
   public distribution or public disclosure of modified versions of the Software
   is prohibited without explicit permission from the copyright holder.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE,
ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
