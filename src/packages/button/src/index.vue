<template>
  <button
    class="nt-button"
    :class="getComputedClass"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'NtButton',

  props: {
    type: {
      type: String,
      default: 'default',
      validator: (val) => (
        ['default', 'primary', 'success', 'info', 'warning', 'danger', 'text'].includes(val)
      )
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getComputedClass() {
      const classes = [];
      const typeClass = `nt-button--${this.type || 'default'}`;
      const isRound = this.round ? 'is-round' : null;
      const isCircle = this.circle ? 'is-circle' : null;
      const isPlain = this.plain ? 'is-plain' : null;
      const isGhost = this.ghost ? 'is-ghost' : null;
      classes.push(typeClass);
      isRound ? classes.push(isRound) : undefined;
      isCircle ? classes.push(isCircle) : undefined;
      isPlain ? classes.push(isPlain) : undefined;
      isGhost ? classes.push(isGhost) : undefined;
      return classes;
    }
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>
