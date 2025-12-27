<template>
    <section id="contact" class="section section-contact">
        <div class="container">
            <header class="section__header">
                <h2 class="section__title">Get In Touch</h2>
            </header>

            <div class="section__content">
                <div class="section-contact__container">
                    <p class="section-contact__intro">
                        Send a message and I'll get back to you as soon as possible.
                    </p>

                    <form class="form">
                        <div class="form-input" style="--columns: 6">
                            <label for="name" class="form-input__label">Name</label>
                            <input id="name" type="text" class="form-input__field" placeholder="Your name" />
                        </div>

                        <div class="form-input" style="--columns: 6">
                            <label for="email" class="form-input__label">Email</label>
                            <input id="email" type="email" class="form-input__field" placeholder="your@email.com" />
                        </div>

                        <div class="form-input">
                            <label for="company" class="form-input__label">Company (optional)</label>
                            <input id="company" type="text" class="form-input__field"
                                placeholder="Who are you working for?" />
                        </div>

                        <div class="form-input">
                            <label for="message" class="form-input__label">Message</label>
                            <textarea id="message" class="form-input__field form-input__field--textarea"
                                placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="submit" class="main-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
