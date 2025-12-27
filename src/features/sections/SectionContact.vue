<script setup lang="ts">
import { reactive, ref } from 'vue';

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
console.debug(apiEndpoint)

const form = reactive({
    name: '',
    email: '',
    company: '',
    message: ''
})

const formSuccess = ref(false);

const formAction = `${apiEndpoint}/contact/create`;
const responseMessage = ref('');

const handleSubmit = () => {
    fetch(formAction, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formSuccess.value = true;
                responseMessage.value = data.message;
            } else {
                responseMessage.value = data.errors;
            }
        })
        .catch(error => {
            responseMessage.value = error;
        })
}
</script>

<template>
    <section id="contact" class="section section-contact">
        <div class="container">
            <header class="section__header">
                <h2 class="section__title">Get In Touch</h2>
            </header>

            <div class="section__content">
                <div class="section-contact__container">
                    <p v-if="!formSuccess" class="section-contact__intro">
                        Send a message and I'll get back to you.
                    </p>

                    <form v-if="!formSuccess" @submit.prevent="handleSubmit" class="form">
                        <div class="form-input" style="--columns: 6">
                            <label for="name" class="form-input__label">Name</label>
                            <input id="name" type="text" class="form-input__field" placeholder="Your name"
                                v-model="form.name" required />
                        </div>

                        <div class="form-input" style="--columns: 6">
                            <label for="email" class="form-input__label">Email</label>
                            <input id="email" type="email" class="form-input__field" placeholder="your@email.com"
                                v-model="form.email" required />
                        </div>

                        <div class="form-input">
                            <label for="company" class="form-input__label">Company (optional)</label>
                            <input id="company" type="text" class="form-input__field"
                                placeholder="Who are you working for?" v-model="form.company" />
                        </div>

                        <div class="form-input">
                            <label for="message" class="form-input__label">Message</label>
                            <textarea id="message" class="form-input__field form-input__field--textarea"
                                placeholder="Tell me about your project..." v-model="form.message" required></textarea>
                        </div>

                        <button type="submit" class="main-btn">
                            Send Message
                        </button>
                    </form>

                    <p v-else class="form-success">
                        {{ responseMessage }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
