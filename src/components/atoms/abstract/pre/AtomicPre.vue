 <template>
  <pre v-bind="{ ...$attrs.vBind, ...$attrs.vBindBtn }">
        <slot name="preContent"></slot>
    </pre>
</template>

<script>
export default {
  name: 'AtomicPre',
  props: {},
  methods: {},
};
</script>
