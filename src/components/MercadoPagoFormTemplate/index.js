const MercadoPagoForm = ({
  email,
  docType,
  docNumber,
  cardNumber,
  paymentMethodId,
  expirationMonth,
  expirationYear,
  holderName,
  securityCode,
  description
} = {}) => {
  return (
    `<form id="pay" name="pay">
      <fieldset>
        <ul>
          <li>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="${email}" placeholder="your email" />
          </li>
          <li>
            <label for="cardNumber">Credit card number:</label>
            <input value="${cardNumber}" type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" onselectstart="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete="off" />
          </li>
          <li>
            <label for="securityCode">Security code:</label>
            <input type="text" id="securityCode" data-checkout="securityCode" value="${securityCode}" placeholder="123" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete="off" />
          </li>
          <li>
            <label for="cardExpirationMonth">Expiration month:</label>
            <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" value="${expirationMonth}" placeholder="11" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete="off" />
          </li>
          <li>
            <label for="cardExpirationYear">Expiration year:</label>
            <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" value="${expirationYear}" placeholder="2025" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete="off" />
          </li>
          <li>
            <label for="cardholderName">Card holder name:</label>
            <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" value="${holderName}" />
          </li>
          <li>
            <label for="docType">Document type:</label>
            <select id="docType" data-checkout="docType" value="${docType}">
              <option value="DNI">DNI</option>
              <option value="CI">Cédula</option>
              <option value="LC">L.C.</option>
              <option value="LE">L.E.</option>
              <option value="Otro">Otro</option>
            </select>
          </li>
          <li>
            <label for="docNumber">Document number:</label>
            <input type="text" id="docNumber" data-checkout="docNumber" value="${docNumber}" placeholder="12345678" />
          </li>
          <li>
            <label for="installments">Installments:</label>
            <select id="installments" class="form-control" name="installments" />
          </li>
        </ul>
        <input type="hidden" name="amount" id="amount" />
        <input description="${description}" type="hidden" name="description" />
        <input type="hidden" name="paymentMethodId" paymentMethodId="${paymentMethodId}" />
        <input type="submit" value="Pay!" />
      </fieldset>
    </form>`
  )
}

export default MercadoPagoForm
