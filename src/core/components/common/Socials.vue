<script lang="ts">
import type { Social } from '@/types/socials';

import GithubIcon from '@/core/components/icons/Github.vue';
import LinkedinIcon from '@/core/components/icons/Linkedin.vue';
import EmailIcon from '@/core/components/icons/Email.vue';

const socials: Social[] = [
    {
        name: 'Github',
        title: 'Follow me on Github',
        url: 'https://github.com/ThanosGkiom',
    },
    {
        name: 'Linkedin',
        title: 'Connect with me on LinkedIn',
        url: 'https://linkedin.com/in/gkiomisis',
    },
    {
        name: 'Email',
        title: 'Send me an email',
        url: 'mailto:thanosgkiomisis32@gmail.com',
    },
];

const iconMap: Record<string, any> = {
    'Github': GithubIcon,
    'Linkedin': LinkedinIcon,
    'Email': EmailIcon,
};


export default {
    props: {
        iconMap: {
            type: Object as () => Record<string, any>,
            default: () => iconMap,
        },
        socials: {
            type: Array as () => Social[],
            default: () => socials,
        },
        hasText: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<template>
    <ul class="socials-list">
        <li v-for="social in socials">
            <a :href="social.url" target="_blank" :title="social.title ?? social.name" class="link-social">
                <component :is="iconMap[social.name]" class="icon-style" />

                <span v-if="hasText">{{ social.name }}</span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss">
.socials-list {
    display: flex;
    align-items: center;
    gap: 20px;

    img,
    svg {
        width: 20px;
        height: 20px;
        display: block;
    }
}
</style>