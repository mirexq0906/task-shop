<template>
  <form class="form-basket">
    <div ref="data" class="form-basket__item">
      <h3 class="form-basket__title">Данные покупателя</h3>
      <div class="form-basket__inputs">
        <input
          v-model="phone"
          class="input"
          type="text"
          placeholder="+7 (___)___-__-__"
        />
        <input v-model="name" class="input" type="text" placeholder="ФИО" />
        <input
          v-model="email"
          class="input"
          type="text"
          placeholder="E-mail (не обязательно)"
        />
        <input
          v-model="city"
          class="input"
          type="text"
          placeholder="Ваш адрес (город, улица, дом, квартира)"
        />
      </div>
    </div>
    <div ref="payment" class="form-basket__item">
      <h3 class="form-basket__title">Выберите способ оплаты</h3>
      <div class="form-basket__checkboxes">
        <label
          v-for="(item, i) in payment"
          :key="i"
          :class="{ active: item.active }"
          class="form-basket__checkbox"
        >
          <input
            :checked="item.active"
            class="form-basket__checkbox-disabled"
            type="checkbox"
            @input="changeCheckbox('payment', i)"
          />
          <div class="form-basket__checkbox-active">
            <span class="form-basket__checkbox-icon"></span>
            <span class="form-basket__checkbox-text">
              {{ item.name }}
            </span>
          </div>
        </label>
      </div>
    </div>
    <div ref="delivery" class="form-basket__item">
      <h3 class="form-basket__title">Выберите способ получения</h3>
      <div class="form-basket__checkboxes">
        <label
          v-for="(item, i) in delivery"
          :key="i"
          :class="{ active: item.active }"
          class="form-basket__checkbox"
        >
          <input
            :checked="item.active"
            class="form-basket__checkbox-disabled"
            type="checkbox"
            @input="changeCheckbox('delivery', i)"
          />
          <div class="form-basket__checkbox-active">
            <span class="form-basket__checkbox-icon"></span>
            <span class="form-basket__checkbox-text">
              {{ item.name }}
            </span>
          </div>
        </label>
      </div>
    </div>
    <span class="form-basket__total-price"
      >Итого: {{ getTotalPriceBasket }} ₽</span
    >
    <button class="form-basket__btn btn" @click.prevent="validate">
      Подтвердить заказ
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
export default defineComponent({
  data() {
    return {
      phone: '',
      name: '',
      email: '',
      city: '',
      payment: [
        { name: 'При получении наличными или картой', active: true },
        { name: 'Оплата онлайн', active: false },
      ],
      delivery: [
        { name: 'Доставка курьером', active: true },
        { name: 'Доставка в пункт выдачи', active: false },
        { name: 'Самовывоз', active: false },
      ],
    };
  },
  computed: {
    ...mapGetters(['getTotalPriceBasket']),
  },
  methods: {
    ...mapMutations(['openModal', 'clearBasket']),
    changeCheckbox(name: string, index: number): void {
      if (name === 'payment') {
        if (this.payment[index].active !== true) {
          for (let i = 0; i < this.payment.length; i++) {
            this.payment[i].active = false;
          }
          this.payment[index].active = true;
        }
      } else if (name === 'delivery') {
        for (let i = 0; i < this.delivery.length; i++) {
          this.delivery[i].active = false;
          this.delivery[index].active = true;
        }
      }
    },
    validate(): void {
      const data: any = this.$refs.data;
      let valid = true;
      if (
        !this.phone.length ||
        !this.name.length ||
        !this.email.length ||
        !this.city.length
      ) {
        data.classList.add('validate');
        valid = false;
      }

      if (valid) {
        this.openModal({ active: true, name: 'order' });
        this.phone = '';
        this.name = '';
        this.email = '';
        this.city = '';
        data.classList.remove('validate');
        this.clearBasket();
      }
    },
  },
});
</script>

<style scoped lang="scss">
.form-basket {
  &__item {
    margin-bottom: 15px;
    max-width: 500px;
    &.validate {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -5px;
        right: -5px;
        bottom: -10px;
        top: -5px;
        display: block;
        border-radius: 5px;
        border: 1px solid rgba(190, 23, 4, 0.9);
        outline: 3.5px solid rgba(190, 23, 4, 0.4);
        z-index: -1;
      }
    }
  }
  &__title {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 120%;
    @media (max-width: 575px) {
      font-size: 25px;
      margin-bottom: 15px;
    }
  }
  &__inputs {
    input:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &__checkbox {
    position: relative;
    &.active {
      pointer-events: none;
    }
    &-disabled {
      position: absolute;
      pointer-events: none;
      opacity: 0;
    }
    &-active {
      display: flex;
      align-items: center;
      padding: 5px;
      gap: 10px;
      border-radius: 5px;
      background: #fff;
      cursor: pointer;
    }
    &-icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #f5f5f5;
      flex-shrink: 0;
    }
    &-disabled:checked ~ &-active {
      .form-basket__checkbox-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #323232;
        &::before {
          content: '';
          display: block;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #323232;
        }
      }
    }
  }
  &__checkbox:not(:last-child) {
    display: block;
    margin-bottom: 10px;
  }
  &__total-price {
    display: block;
    font-size: 30px;
    font-weight: 700;
    @media (max-width: 575px) {
      font-size: 25px;
    }
  }
  &__btn {
    margin-top: 20px;
  }
}
</style>