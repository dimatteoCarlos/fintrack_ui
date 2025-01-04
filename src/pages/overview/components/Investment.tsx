import { StatusSquare } from '../../../components/boxComponents';
import { CardTitle } from '../../../components/CardTitle';
import OpenAddEditBtn from '../../../components/OpenAddEditBtn';
import { CreateNewAccountPropType } from '../Overview';

function Investment({
  createNewAccount,
  originRoute,
}: CreateNewAccountPropType) {
  //Investment temporary data
  //questions: does status have some conditional or variable style?
  //seems that balanceType has at least two possible values: loss / profit
  //capital could be the amount of the investment or not needed?

  const investment = [
    {
      title1: 'acc name',
      subtitle1: 'capital invested',
      title2: 'factual balance',
      capital: 0,
      status: (
        <span>
          <StatusSquare />
        </span>
      ),
      balanceType: '% Loss',
    },
    {
      title1: 'acc name',
      subtitle1: 'capital invested',
      capital: 0,
      title2: 'factual balance',
      status: (
        <span>
          <StatusSquare />
        </span>
      ),
      balanceType: '% Loss',
    },
    {
      title1: 'acc name',
      subtitle1: 'capital invested',
      capital: 0,
      title2: 'factual balance',
      status: (
        <span>
          <StatusSquare />
        </span>
      ),
      balanceType: '% Loss',
    },
  ];

  return (
    <>
      {/*GOALS INVESTMENT  */}
      <div className='presentation__card__title__container flx-row-sb'>
        <CardTitle>Investment</CardTitle>
      </div>

      <article className='goals__investment'>
        {/* Account Factual Balance  */}

        {investment.map((investment, indx) => {
          const { title1, subtitle1, title2, balanceType } = investment;

          // console.log('🚀 ~ {investment.map ~ capital:', capital);

          {
            return (
              <div
                className='tile__container tile__container--investment flx-row-sb'
                key={`account-${indx}`}
              >
                <div className='tile__container__col tile__container__col--investment col--investment--left'>
                  <div className='tile__title tile__title--account'>
                    {title1}
                  </div>
                  <div className='tile__subtitle tile__subtitle--account'>
                    {subtitle1}

                    {/* {currencyFormat(
                          defaultCurrency,
                          0,
                          formatNumberCountry
                        )} */}
                  </div>
                </div>

                <div className='tile__container__col tile__container__col--investment col--investment--right'>
                  <div className='tile__title tile__title--account'>
                    {title2}
                  </div>
                  <div className='tile__status--investment--right '>
                    <StatusSquare></StatusSquare>
                    <div className='tile__subtitle subtitle__status__investment--right '>
                      {balanceType}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </article>

      {
        <OpenAddEditBtn
          btnFunction={createNewAccount}
          btnFunctionArg={originRoute}
          btnPreviousRoute={originRoute}
        >
          <div className='open__btn__label'>Add Account</div>
        </OpenAddEditBtn>
      }
    </>
  );
}

export default Investment;
