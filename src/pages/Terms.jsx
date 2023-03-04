import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";
import { Link } from "react-router-dom";

const CopyTrading = () => {
  return (
    <>
      <HomeHelmet title={"Terms & Condition"} />
      {/* <!-- start header area --> */}
      {/* <!-- start header area --> */}
      <header className="header--sticky header-one ">
        <TopBanner />
        <Menu />
      </header>
      {/* <!-- End header area --> */}
      <Sidebar />
      <div id="anywhere-home"></div>
      {/* <!-- start breadcrumb area --> */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">Terms & Conditions</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <Link href="/">Home</Link>
                <span> / </span>
                <a href="#" className="active">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}
      {/* <!-- start copy trading section --> */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* <!-- service details left area start --> */}
              <div className="service-detials-step-1">
                <h4 className="title">TERMS AND CONDITIONS</h4>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Create Account.</h6>
                  </div>
                </div>
                <p className="disc">
                  This Agreement is entered into by and these Terms & Conditions
                  (hereinafter referred to as the “Agreement”) shall regulate
                  the relationship between Bit Bing Live, (hereinafter referred
                  to as the “Company”), and the user (a natural or legal entity)
                  (hereinafter referred to as the “Client”) of Bitbinglive.com
                  (hereinafter referred as the “Website”).
                </p>

                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client confirms that he/she has read, understood and
                    accepted all information, conditions and terms set out on
                    the Website which are open to be reviewed and can be
                    examined by the public and which include important legal
                    Information.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    By accepting this Agreement, the Client agrees and
                    irrevocably accepts the terms and conditions contained in
                    this Agreement, its annexes and/or appendices as well as
                    other documentation/information published on the Website,
                    including without limitation to the Privacy Policy, Payment
                    Policy, Withdrawal Policy, Code of Conduct, Order Execution
                    Policy and Anti-Money Laundering Policy. The Client accepts
                    this Agreement by registering an Account on the Website and
                    depositing funds. By accepting the Agreement, and subject to
                    the Company’s final approval, the Client enters into a legal
                    and binding agreement with the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The terms of this Agreement shall be considered accepted
                    unconditionally by the Client upon the Company’s receipt of
                    an advance payment made by the Client. As soon as the
                    Company receives the Client's advance payment, every
                    operation made by the Client on the Trading Platform shall
                    be subject to the terms of this Agreement and other
                    documentation/information on the Website.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client hereby acknowledges that each and any Operation,
                    activity, transaction, order and/or communication performed
                    by him/her on the Trading Platform, including without
                    limitation through the Account, and the Website, shall be
                    governed by and/or must be executed in accordance with the
                    terms and conditions of this Agreement and other
                    documentation/information on the Website.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    By accepting this current agreement, the Client confirms
                    that he/she is able to receive information, including
                    amendments to the present Agreement either via email or
                    through the Website.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    A client that is a legal entity can register with the
                    Company not through the Website but by sending an email with
                    its request to: support@bitbinglive.com. All terms and and
                    conditions contained herein, including without limitation to
                    1 to 5 above, shall at all times be applicable to the Legal
                    Entity and the latter shall conform with such terms and
                    conditions, obligations and rights at all times.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Terms.</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Account – means a unique personified account registered in
                    the name of the Client and which contains all of the
                    Client’s transactions/ operations on the Trading Platform
                    (as defined below) of the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Ask - means the higher price in a quote. The price the
                    Client may buy at.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Bid - means the lower price in a quote. The price the Client
                    may sell at.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    CFD (contract for difference) - means a tradeable contract
                    entered into between the Client and the Company, who
                    exchange the difference in the value of an Instrument, as
                    specified on the Trading Platform at the time of opening a
                    Transaction, and the value of that Instrument at the
                    contract’s end.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Digital Option Contract - means a type of derivative
                    instrument where the Client earns a payout if they correctly
                    predict the price movement of the underlying asset at the
                    time of the option’s expiry. The prediction can be made as
                    to whether the value of the underlying asset will fall above
                    or below the strike price at time of expiration. Should the
                    option expire at the selected strike price, it will be
                    considered to expire out-of-the money and will result in the
                    loss of the invested amount.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Execution - means the execution of Client order(s) by the
                    Company acting as the Client's counter party as per the
                    terms of the present agreement.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Financial Instruments - means the Financial Instruments as
                    per paragraph 2.4 below that are available on the Company’s
                    Trading Platform.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    KYC documents - means the documents to be provided by the
                    Client, including without limitation to the a copy of the
                    passport or ID and utility bill of the Client, in case it is
                    a natural person and/or certificates showing the management
                    and ownership going all the way up to the ultimate
                    beneficial owner, in case it is a legal entity, and any
                    other documents the Company may request upon its sole
                    discretion
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Market - means the market on which the Financial Instruments
                    are subject to and/or traded on, whether this market is
                    organized / regulated or not and whether it is in St.
                    Vincent and the Grenadines or abroad.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Market Maker - means a company which provides BID and ASK
                    prices for financial instruments.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Operations – means actions performed at the Client’s
                    Account, following an order placed by the Client,, connected
                    with but not limited to crediting of funds, return of funds,
                    opening and closing of trade transactions/positions and/or
                    that relate to financial instruments.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Prices - means the prices offered to the Client for each
                    transaction which may be changed without prior notice. Where
                    this is relevant, the “Prices” given through the Trading
                    Platform include the Spread (see definition below).
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Services – means the services described in section 3 of this
                    Agreement.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Spread - means the difference between the purchase price Ask
                    (rate) and the sale price Bid (rate) at the same moment. For
                    avoidance of doubt, a predefined spread is for the purposes
                    of this Agreement assimilated commission.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Trading Platform - means an electronic system on the
                    internet that consists of all programs and technology that
                    present quotes in real-time, allow the
                    placement/modification/deletion of orders and calculate all
                    mutual obligations of the Client and the Company.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Subject of the Agreement.</h6>
                  </div>
                </div>

                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The subject of the Agreement shall be the provision of
                    Services to the Client by the Company under the Agreement
                    and through the Trading Platform.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall carry out all transactions as provided in
                    this Agreement on an execution-only basis, neither managing
                    the account nor advising the Client. The Company is entitled
                    to execute transactions requested by the Client as provided
                    in this Agreement even if the transaction is not beneficial
                    for the Client. The Company is under no obligation, unless
                    otherwise agreed in this Agreement and/or other
                    documentation/information on the Website, to monitor or
                    advise the Client on the status of any transaction, to make
                    margin calls, or to close out any of the Client’s open
                    positions. Unless otherwise specifically agreed, the Company
                    is not obligated to make an attempt to execute the Client’s
                    order using quotes more favorable than those offered through
                    the Trading Platform.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">General Provisions.</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company will offer Services to the Client at the
                    absolute discretion of the Company subject to the provisions
                    of this Agreement.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client is prohibited and shall not, under no
                    circumstances, be allowed to execute any
                    transactions/Operations on the Trading Platform, Website
                    and/or through his/her Account, that would as a result
                    exceed the total balance and/or amount of money
                    deposited/maintained with his/her Account. Such deposited
                    amounts shall be considered to have been provided as
                    collateral, either in the form of a lien or otherwise, to
                    the Company by the Client by which the obligation of the
                    Client to pay any money to the Company is secured.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Services of the Company.</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Services – services provided by the Company to the Client
                    through the Trading Platform of the Company, including
                    without limitation to customer, analytics, news and
                    marketing information services.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall facilitate the execution of trade
                    activities/orders and/or transactions of the Client but the
                    Client hereby acknowledges and accepts that the Company
                    shall not at any time provide any trust services and/or
                    trading consultation or advisory services to the Client.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall process all transactions/Operations of the
                    Client in accordance with the terms and conditions of this
                    Agreement and on an execution-only basis. The Company shall
                    not manage the Client’s Account nor advise the Client in any
                    way.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall process the orders/transactions requested
                    by the Client under this Agreement irrespective of whether
                    such orders/transactions may result to not being beneficial
                    for the Client. The Company is under no obligation, unless
                    otherwise agreed in this Agreement and/or other
                    documentation/information on the Website, to monitor or
                    advise the Client on the status of any transaction/order, to
                    make margin calls to the Client, or to close out any of the
                    Client’s open positions. Unless otherwise specifically
                    agreed, the Company is not obligated to process or attempt
                    to process the Client’s order/transaction using quotes more
                    favorable than those offered through the Trading Platform.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall not be financially liable for any
                    operations conducted by the Client through the Account
                    and/or on the Trading Platform.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Each Client shall be the only authorized user of the
                    Company’s services and of the corresponding Account. The
                    Client is granted an exclusive and non-assignable right to
                    the use of and to access the Account and it is his/her
                    responsibility to ensure that no other third party,
                    including, without limitation, to any next of kin and/or to
                    members of his/her immediate family, shall gain access to
                    and/or trade through the Account assigned to her/him.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client shall be liable for all orders given through his
                    security information and any orders received in this manner
                    by the Company shall be considered to have been given by the
                    Client. So long as any order is submitted through the
                    Account of a Client, the Company shall reasonably assume
                    that such orders are submitted by Client and the Company
                    shall not be under any obligation to investigate further
                    into the matter. The Company shall not be liable to and/or
                    does not maintain any legal relations with, any third party
                    other than the Client.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    If the Client acts on behalf of any third party and/or on
                    behalf of any third party’s name, the Company shall not
                    accept this person as a Client and shall not be liable
                    before this person regardless if such person was identified
                    or not.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client has the right to cancel his order given to the
                    Company within 3 seconds after the moment of giving such
                    order to the Company (hereinafter referred to as the
                    “Cancellation”). The client agrees and understands that the
                    three seconds cancellation option offered by the Company is
                    applicable and available for the client as long as the price
                    remains unchanged. Three seconds from the moment of giving
                    the order to the Company by the Client via the platform, the
                    Company may (but is not obliged to) offer to buyout the
                    option from the Client and the Client have the right to
                    agree to such offer (hereinafter referred to as the
                    “Buyout”). The Client is entitled to use such Cancellation
                    or Buyout option subject to the conditions specified on the
                    platform. Such conditions can also include the fee charged
                    by the Company. Such fee is specified on the platform. The
                    Company is obliged to provide all necessary information as
                    to the conditions of Cancellation and Buyout, their cost,
                    etc. The Client acknowledges and agrees that provision of
                    such information on the platform is sufficient. The Client
                    acknowledges and agrees that the use of Cancellation or
                    Buyout is very risky to the Client as long as the cost of
                    Cancellation and/or Buyout depends on the market situation.
                    The Client acknowledges and agrees that he bears all the
                    risks associated with the use of Cancellation and/or Buyout.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client is entitled to use such Cancellation or Buyout
                    option subject to the conditions specified on the Trading
                    Platform/Website, including without limitation to any fee to
                    be charged by the Company. The Company shall be obliged to
                    provide all necessary information as to the conditions of
                    Cancellation and Buyout, including any applicable costs,
                    etc. The Client acknowledges, accepts and agrees that
                    provision of such information on the Trading Platform is
                    sufficient. The Client acknowledges, accepts and agrees that
                    the use of Cancellation or Buyout option entail large risks
                    for the Client, especially in the case where the costs
                    associated with Cancellation and/or Buyout, depend on the
                    market situation. The Client acknowledges, accepts and
                    agrees that he/she shall bear all risks associated with the
                    use of Cancellation and/or Buyout option.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    It is understood and agreed by the Client that the Company
                    may from time to time, at its sole discretion, utilize a
                    third party to hold the Client’s funds and/or for the
                    purpose of receiving payment execution services. These funds
                    will be held in segregated accounts from such third party’s
                    own funds and will not affect the rights of the Client to
                    such funds.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company offers internal live chats where clients can
                    share inter alia their trading ideas and/or express their
                    general thoughts. The client acknowledges and agrees that
                    the Company’s live chat feature is not and will not
                    constitute a valid and/or accurate information and/or
                    information addressed to the clients/potential clients
                    and/or in any way information that is controlled by the
                    Company and/or investment advice, as it is merely a feature
                    allowing clients to inter alia express their thoughts and
                    ideas between themselves.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Provision of investment advice shall only be carried out by
                    the Company subject to a separate written agreement with the
                    Client and after assessing the Client’s personal
                    circumstances. Unless such written agreement has been
                    entered into between the Client and the Company, the
                    provision of reports, news, opinions and any other
                    information by the Company to the Client does not constitute
                    investment advice or investment research.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                      Execution of Orders / Electronic Trading
                    </h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    By accepting this Agreement, the Client accepts that he has
                    read and understood all provisions of this Agreement and
                    related information on the Website. The Client accepts and
                    understands that all orders received shall be executed by
                    the Company as the counter party of the transaction in its
                    capacity of Market Maker. The Company shall act as a
                    principal and not as an agent on the Client’s behalf for the
                    purpose of the Execution of orders. The Client is informed
                    that Conflicts of Interest may arise because of this model.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Reception of the order by the Company shall not constitute
                    acceptance and acceptance shall only be constituted by the
                    execution of the order by the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall be obliged to execute the Client's orders
                    sequentially and promptly.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges and accepts a) the risk of mistakes
                    or misinterpretations in the orders sent through the Trading
                    Platform due to technical or mechanical failures of such
                    electronic means, b) the risk of any delays or other
                    problems as well as c) the risk that the orders may be
                    placed by persons unauthorised to use and/or access the
                    Account, and the Client agrees to indemnify the Company in
                    full for any loss incurred as a result of acting in
                    accordance with such orders.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client accepts that during the reception and
                    transmission of his/her order, the Company shall have no
                    responsibility as to its content and/or to the identity of
                    the person placing the order, except where there is gross
                    negligence, willful default or fraud by the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges that the Company will not take
                    action based on the orders transmitted to the Company for
                    execution by electronic means other than those orders
                    transmitted using the predetermined electronic means such as
                    the Trading Platform, and the Company shall have no
                    liability towards the Client for failing to take action
                    based on such orders.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The client acknowledges and agrees that any products or
                    services that may be offered by the Company may not always
                    be available for purchasing or use for trading purposes, and
                    it is in the Company's absolute discretion whether it will
                    make these products available or not to the clients at any
                    time. The Company shall bear no liability, monetary or
                    otherwise, in relation to this section, including without
                    limitation to not making available any product at any given
                    time.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Limitation of Liability</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company does not guarantee uninterrupted service, safe
                    and errors-free, and immunity from unauthorized access to
                    the trading sites' servers nor disruptions caused from
                    damages, malfunctions or failures in hardware, software,
                    communications and systems in the Client's computers and in
                    the Company's suppliers.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Supplying services by the Company depends, inter alia, on
                    third parties and the Company bears no responsibility for
                    any actions or omissions of third parties and bears no
                    responsibility for any damage and/or loss and/or expense
                    caused to the Client and/or third party as a result of
                    and/or in relation to any aforesaid action or omission.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company will bear no responsibility for any damage of
                    any kind allegedly caused to the Client, which involves
                    force majeure or any such event that the Company has no
                    control of and which has influenced the accessibility of its
                    trading site.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Under no circumstances will the Company or its Agent(s) hold
                    responsibility for direct or indirect damage of any kind,
                    even if the Company or its Agent(s) had been notified of the
                    possibility of aforesaid damages.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Settlement of Transactions</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall proceed to a settlement of all
                    transactions upon execution of such transactions.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    An online statement of Account will be available for
                    printing to the Client on the Trading Platform of the
                    Company, at all times.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Indemnity and Liability</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client shall indemnify and keep indemnified the Company
                    and its directors, officers, employees or representatives
                    against all direct or indirect liabilities (including
                    without limitation all losses, damages, claims, costs or
                    expenses), incurred by the Company or any other third party
                    in respect to any act or omission by the Client in the
                    performance of his/her obligations under this Agreement
                    and/or the liquidation of any financial instruments of the
                    Client in settlement of any claims with the Company, unless
                    such liabilities result from gross negligence, willful
                    default or fraud by the Company. This indemnity shall
                    survive termination of this Agreement.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall not be liable for any direct and/or
                    indirect loss, expense, cost or liability incurred by the
                    Client in relation to this Agreement, unless such loss,
                    expense, cost or liability is a result of gross negligence,
                    willful default or fraud by the Company. Notwithstanding the
                    provisions of section 8.1 above, the Company shall have no
                    liability to the Client whether in tort (including
                    negligence), breach of statutory duty, or otherwise, for any
                    loss of profit, or for any indirect or consequential loss
                    arising under and/or in connection with the Agreement.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall not be liable for any loss of opportunity
                    as a result of which the value of the financial instruments
                    of the Client could have been increased or for any decrease
                    in the value of the financial instruments of the Client,
                    regardless of the cause, unless such loss is directly due to
                    gross negligence, willful default or fraud on the part of
                    the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall not be liable for any loss which is the
                    result of misrepresentation of facts, error in judgment or
                    any act done or which the Company has omitted to do,
                    whenever caused, unless such act or omission resulted from
                    gross negligence, willful default or fraud by the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall not be liable for any act or omission or
                    for the insolvency of any counterparty, bank, custodian or
                    other third party which acts on behalf of the Client or with
                    or through whom transactions on behalf of the Client are
                    carried out.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Personal Data</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    By accepting the terms and conditions of this Agreement, the
                    Client irrevocably consents to the collection and processing
                    of his/her personal data/information by the Company without
                    the use of automatic controls, as the same are provided by
                    him/her to the Company. The term personal data for the
                    purposes of this Agreement shall mean: the Name, Surname,
                    Patronymic, gender, address, phone number, e-mail, IP
                    address of the Client, Cookies and information that relate
                    to the provision of Services to the Client (for example, the
                    Client’s trading story).
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client shall be obliged to provide correct, accurate and
                    complete personal data/information as requested by the
                    Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The purpose of collecting and processing the personal data
                    is to comply with applicable regulating legislation
                    requirements, including without limitation to anti-money
                    laundering regulations, as well as for any and all purposes
                    in relation to this Agreement, including without limitation
                    to enable the Company to discharge its obligations towards
                    the Client.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges and consents to that, for the
                    purposes described at the section directly above, the
                    Company shall be entitled to collect, record, systematize,
                    accumulate, store, adjust (update, change), extract, use,
                    transfer (disseminate, provide, access), anonymize, block,
                    delete, destroy such personal data and/or perform any other
                    actions according to the current regulating legislation.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges and consents to the Company storing,
                    maintaining and processing his/her personal data in the
                    manner as described in this Agreement during the term of the
                    Agreement and for 5 years following any termination of the
                    Agreement.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client hereby acknowledges, accepts, agrees and consents
                    to the disclosure of personal data by the Company to third
                    parties and their representatives, solely for the purposes
                    of the Agreement, including without limitation in order to
                    facilitate processing/execution of the Client’s
                    orders/Operations, provided that at all times (i) the amount
                    of personal data to be disclosed to any such third party is
                    proportionate and/or limited solely to facilitate to the
                    actions as described above, and (ii) the Company shall
                    ensure that such third party shall treat the personal data
                    in accordance with applicable laws and regulations.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall not be entitled to make available the
                    personal data in public and/or disclose such personal data
                    for any other purposes, subject to disclosure required under
                    applicable laws and regulations.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    During processing of the personal data, the Company shall
                    take necessary legal, organizational and technical measures
                    to protect such personal data from unauthorized or
                    accidental access, destruction, change, blocking, copying,
                    provision, and dissemination as well as from any other
                    illegal actions.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Assignment</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Agreement shall be personal to the Client and the Client
                    shall not be entitled to assign or transfer any of his/her
                    rights or obligations under this Agreement.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company may at any time assign or transfer any of its
                    rights or obligations under this Agreement to a third party.
                    The Company shall notify the Client of any such assignment.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Risk Statement</h6>
                  </div>
                </div>
                <p className="disc">
                  The Client hereby confirms to have read, understood and hereby
                  accepts the risk statement relating to the use of Services on
                  the Website, as the same is available electronically via the
                  Website.
                </p>

                <p className="disc">
                  The Client hereby confirms to have read, understood and hereby
                  accepts the risk statement relating to the use of Services on
                  the Website, as the same is available electronically via the
                  Website.
                </p>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Charges and Fees.</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall be entitled to receive a fee from the
                    Client regarding the Service(s), provided by the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company may pay fee/commission to business introducers,
                    referring agents, or other third parties based on written
                    agreement. This fee/commission is related to the
                    frequency/volume of transactions and/or other parameters.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company may pay fee/commission to business introducers,
                    referring agents, or other third parties based on written
                    agreement. This fee/commission is related to the
                    frequency/volume of transactions and/or other parameters.
                    All applicable fees or charges can be found on the Company’s
                    Website (General Fees). The Company has the right to amend
                    its fees and charges from time to time.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Ongoing trading fees, including inter alia swaps, shall be
                    charged and deducted from the Client’s account balance. In
                    case the Client does not maintain enough funds in his/her
                    balance, the relevant position subject to swap will be
                    closed by the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client agrees that any amounts sent by the Client will
                    be deposited to the Account at the value on the date of the
                    payment received and net of any charges / fees charged by
                    the bank or any other intermediary involved in such
                    transaction process and/or in any other case, the Client
                    shall authorize the Company to withdraw the fee by way of
                    transfer from the Client’s Account.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                      Duration and Termination of the Agreement.
                    </h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Agreement herein shall be concluded for an indefinite
                    term.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Agreement herein shall come into force when the Client
                    accepts the Agreement and makes an advance payment to the
                    Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    In case of any discrepancies between the text of the
                    Agreement in English and its translation in any other
                    language, the text of the Agreement in English as a whole
                    shall prevail, as well as the English version/text of any
                    other documentation/information published on the Website.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company shall be entitled to terminate this Agreement
                    immediately without giving prior notice if the Client fails
                    to provide to the Company his/her KYC documents within 14
                    days from the moment of acceptance of this Agreement,
                    constituting, thus, his/her Account as an unverified
                    Account.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    In case of termination of this Agreement for a reason
                    indicated in section 15.b, subclauses i, ii and x of this
                    Agreement the Company shall have no liability towards the
                    Client and no obligation to pay the profit of the Client (if
                    any).
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    In case of termination of this Agreement for a reason
                    indicated in sections 15.a of this Agreement, the Company
                    shall have either to wire to the Client the remaining
                    balance or to give to the Client the opportunity to withdraw
                    his/her remaining balance. In case of termination of this
                    Agreement for a reason indicated in section 16.b of this
                    Agreement, the Company shall have to wire to the Client the
                    remaining balance excluding any profit.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                      Terms and Conditions for 1-Click Service.
                    </h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client shall agree to make a deposit to his/her Account
                    to use the Company Services or any other additional services
                    ordered by the Client on the Website as well as all
                    additional expenses (if necessary), including but not
                    limited to any taxes, duties, etc. The Client shall be
                    completely responsible for timely depositing the funds into
                    his/her Account. Provider of payment services shall ensure
                    only fulfillment of payment in the amount defined by the
                    Site and shall not be liable for payment of the
                    above-mentioned additional amounts by the Website’s Client.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The payment is considered to be processed and cannot be
                    returned after clicking the “Payment” button. By clicking
                    the “Payment” button, the Client shall agree that he/she
                    cannot return the payment or require its recall.
                    Additionally, by accepting the terms and conditions herein
                    contained , the Client as the owner of the payment card
                    confirms that he/she shall be entitled to use the Services
                    offered on the Website.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    By accepting the terms and conditions of this Agreement and
                    depositing funds to the Account, the Client agrees to the
                    use the Website’s Services and accepts that the processing
                    of any of the Client’s payment shall be executed by a
                    provider of payment services, being a third party to this
                    Agreement (the “Provider”), and the Client further
                    acknowledges and accepts that no legal right exists for
                    return of already purchased Services or other options of
                    payment cancellation. In case if the Client is willing to
                    refuse from using the 1-Click service for the next purchase
                    of the Service, the Client can refuse from 1-Click service
                    using the Account on the Website.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Note that 1-click deposits (recurring payments) are not
                    processed as 3-D secure transactions, the client needs to
                    enable 3-D secure function if he would like the payments to
                    be processed as 3-D secure", as it's vital information in
                    regards to BTC withdrawal policy.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Provider shall not be in any case liable for the
                    refusal/impossibility to process the data connected with
                    payment card of the Client, or for the refusal connected
                    with failure to obtain permission from the issue bank to
                    process payment using the payment card of the Client. The
                    Provider shall not be in any case liable for quality,
                    amount, and price of any service, offered to the Client or
                    purchased by the Client of the Website using the payment
                    card of the Client. Paying for any Services of the Website
                    the Client first of all shall be obliged to fulfill the
                    rules of using the Website. We are asking to consider that
                    only the Client as the owner of the payment card shall be
                    liable for timely payment of any service ordered via the
                    Website and for all additional expenses/fees connected with
                    this payment. The Provider shall only be the performer of
                    payment in the amount specified by the Website and shall not
                    be in any case liable for any pricing, general prices and/or
                    total sums.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    In case of the situation connected with the Client’s dissent
                    with the terms mentioned above and/or any other reasons, we
                    are asking the Client to promptly refuse from making a
                    payment and to directly address the administrator/support of
                    the Website if necessary.
                  </li>
                </ol>

                <h3>Annex 1 - General Terms Technical Regulation.</h3>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">The Client’s Responsibility.</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges that these General Terms are an
                    integral part of this Agreement.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    It is the Client's responsibility to verify that all
                    transactions and Service(s) received are not contradictory
                    to any applicable law and to undertake any other legal duty
                    emanating from the use of Website at the Client’s sole
                    option, discretion and risk, and the Client is solely
                    responsible for ascertaining whether it is legal in the
                    Client's jurisdiction and/or place of residence. The Client
                    holds sole liability for all transactions in his Trading
                    Account, including all cards transactions or other means of
                    deposit and withdrawal transactions (as stated below). The
                    Client acknowledges that the Company reserves the right to
                    accept or decline any deposit and/or funding and/or
                    withdrawal request by the Client depending on the payment
                    method that the Client chooses (which includes but is not
                    limited to the third party financial institution from which
                    the Client wishes to deposit/withdraw funds with the Company
                    (Third Party Institutions)), and the Company may suggest to
                    the Client an alternative for its request. It is important
                    to note that the Company does not have and cannot in any way
                    have any, control over such Third Party Institutions and any
                    transactions made by the Client through the Platform using
                    such institutions and it is hereby acknowledged and agreed
                    that the Company shall bear no liability, monetary or
                    otherwise, in relation to any loss of funds incurred by the
                    Client pursuant to any actions or omissions of Third Party
                    Institutions.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client is responsible for securing his/her Username and
                    Password for his Trading Account. The Client holds sole
                    responsibility for any damage caused due to any act or
                    omission of the Client causing inappropriate or irregular
                    use of the Client Trading Account.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    It is clearly stated and agreed by the Client that the
                    Client bears sole responsibility for any decision made
                    and/or to be made by the Client relying on the content of
                    the Website and no claim and/or suit of any kind will arise
                    to that effect against the Company and/or its directors
                    and/or employees and/or functionaries and/or Agents (the
                    Company and/or its Agents). The Company and/or its Agents
                    will hold no responsibility for loss of profits due to
                    and/or related to the Website, Transactions carried out by
                    the Client, Services and the General Terms of use or any
                    other damages, including special damages and/or indirect
                    damages or circumstantial damages caused, except in the
                    event of malicious acts made by the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Without limitation of the aforesaid and only in the event of
                    definitive judgment by court or other authorized legal
                    institution resolving that the Company and/or its Agent(s)
                    hold liability towards the Client or third party, the
                    Company's liability, in any event, will be limited to the
                    amount of money deposited and/or transferred by the Client
                    to the Trading Account in respect of the transaction which
                    caused the liability of the Company and/or its Agent(s) (if
                    such was caused).
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    No Trading Account will be approved without the completion
                    of the Company’s compliance procedures, including the
                    identification and verification of the Account.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Risks.</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The value of the Financial Instruments offered by the
                    Company may increase or decrease. The Client acknowledges
                    that they fully understand the risks involved in trading
                    CFDs (and other similar products), including, but not
                    limited to, the risk of loss of all funds.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    CFD Trading does not give you any right to the underlying
                    instrument of the Transaction. This means that you do not
                    have any interests in, or the right to purchase any
                    underlying shares in relation to such instruments because
                    the CFDs represent a notional value only.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Virtual currencies are complex and high-risk products, and
                    their prices fluctuates widely; as such, they entail the
                    risk of losing the entire invested capital. Trading
                    cryptocurrencies may result in significant loss over a short
                    period of time. Clients should not trade in virtual
                    currencies in case they do not have the necessary knowledge
                    and expertise in these products.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges that he has read, understood and
                    accepted the Company’s risk disclosure information found on
                    the Company’s Website.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Financial Information.</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company should not be held responsible for any losses
                    that the Client may incur (or to third party) due to
                    reliance on inaccurate or erroneous financial information on
                    the Website.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client should verify the accuracy and reliability of the
                    information on the Website and its appropriateness in
                    comparison with other dependable information sources. The
                    Company will not be held responsible for any allegedly
                    caused claim, cost, loss or damage of any kind as a result
                    of information offered on the Website or due to information
                    sources used by the Website.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client approves and accepts that any oral information
                    given to him/her in respect of his Trading Account might be
                    partial and unverified. The Client accepts sole risk and
                    responsibility for any reliance on the aforementioned
                    information. The Company does not give any warranty that
                    pricing or other information supplied by it through its
                    trading software or any other form is correct or that it
                    reflects current market conditions.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Quotes.</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges that the only reliable source of
                    quote flow information is the main server for customer
                    requests. The quotes on the Trading Platform cannot serve as
                    a reliable source of information about the real quotes flow,
                    as in the case of unstable connection between the Trading
                    Platform and the server part of the quotes from the flow may
                    not reach the Trading Platform.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The graphs displayed on the Trading Platform are indicative.
                    Thus, the Company does not guarantee that the transaction
                    will be made at the same prices specified on the graphs in
                    the Trading Platform at the time of submission of the other
                    customer transactions.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The price displayed on the Trading Platform is formed by the
                    formula (Bid+Ask)/2.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Non-market quote – the price in the Trading Platform which
                    does not correspond to the price on the market at this
                    moment of time (hereinafter referred to as the “Non-market
                    price”).
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Copyright</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Copyrights and Intellectual Property (IP) on the Website are
                    the Company's property or of third parties which have
                    authorized the Company to use such IP on the Website and
                    Service(s). It is forbidden to copy, distribute, duplicate,
                    present in public, or deliver the copyrighted material, in
                    whole or in part, to third parties. It is forbidden to
                    alter, advertise, broadcast, transfer, sell, distribute or
                    make any commercial use of the copyrighted material, in
                    whole or in part, except with duly signed prior permission
                    from the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Unless explicitly stated otherwise, any material and/or
                    message, including without limitation, idea, knowledge,
                    technique, marketing plan, information, questions, answers,
                    suggestions, emails and comments (hereinafter –
                    “Information”) delivered to the Company shall not be
                    considered the Client's confidential or proprietary right
                    of. Consent to the Agreement will be considered as
                    authorization to the Company to use the entire Clients'
                    Information (excluding Clients' Information designated for
                    personal identification), at the absolute and sole
                    discretion of the Company without requirement of any
                    additional permission from the Client and/or the payment of
                    any compensation due to such use.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Client undertakes that any notice, message or any other
                    material supplied by the Client shall be appropriate and
                    shall not harm other persons including their proprietary
                    rights. Client shall refrain from uploading or sending any
                    illegal and/or harmful and/or disturbing to other Clients
                    material, and is strictly forbidden from taking any action,
                    which might damage the Company.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                      Content and Third Parties’ Websites
                    </h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Website might include general information, news,
                    comments, quotes and other information related to financial
                    markets and/or advertising. Some information is supplied to
                    the Website by unaffiliated companies.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company does not provide investment research. All news,
                    comments, quotes and other information related to financial
                    markets published by the Company are of
                    promotional/marketing nature only.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company does not prepare, edit or promote the
                    information/links and/or other information provided by
                    unaffiliated companies.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company will not be liable for the content of any
                    third-party websites or the actions or omissions of their
                    proprietors nor for the contents of third party
                    advertisements and sponsorship on those websites. The
                    hyperlinks to other websites are provided for information
                    purposes only. Any Client and/or potential client use any
                    such links at his/her own risk.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                      Processing of Client Orders to Open Positions
                    </h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    If the amount of available funds is sufficient to open a
                    position - the position will be opened.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    If the size of the available funds is insufficient to open a
                    position - the position will not be opened.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client’s order to open a position is processed, and the
                    position is opened only after the corresponding entry in the
                    server log file. Each new position is assigned with a serial
                    number.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                      Processing of Client Orders to Close Positions
                    </h6>
                  </div>
                </div>
                <p className="disc">
                  Closing of trading position occurs at the current price at the
                  trading server at the moment of closing of the trading
                  operation.
                </p>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">OTC Assets</h6>
                  </div>
                </div>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    OTC Asset or “over the counter” is an asset that traded out
                    of the regular market (hereinafter referred to as the
                    “Asset”).
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Asset’s price is formed from data for trade requests and
                    orders of the Clients, received by the Company.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges that by making trade requests and
                    orders on such Asset, he/she understands the essence of the
                    work of such an Asset and the pricing algorithm of the
                    Asset.
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Client acknowledges that by making trade requests and
                    orders on such Asset, he/she admits that the only reliable
                    source of quoting information is the main server for the
                    trade orders of the Clients.
                  </li>
                </ol>

                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">Benefits</h6>
                  </div>
                </div>
                <p className="disc">
                  The Company may provide benefits to clients, including but not
                  limited to, VIP status, tournaments and/or other privileges
                  (“Benefits”), at its absolute discretion and subject to
                  fulfilling the required conditions. The Client acknowledges
                  and accepts:
                </p>
                <ol class="ml-2 single-banifits">
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The Company reserves the right, without prior notification,
                    to amend or cancel any of the Benefits provided at any time
                    for any reason;
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    Conditions are subject to change at any time and may vary
                    depending on each region;
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    It is prohibited to abuse any of the privileges provided by
                    the Company (e.g. creating multiple trading accounts to
                    claim these Benefits);
                  </li>
                  <li className="disc flex">
                    <i className="far fa-check-circle pr-2 pt-2 text-[#DF0A0A]"></i>
                    The client may submit a request to support@bitbinglive.com
                    to stop receiving such Benefits at any time.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End copy trading section --> */}
      {/* <!-- start header area --> */}
      <Footer />
      {/* <!-- ENd Header Area --> */}
      {/* <!-- start loader --> */}
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      {/* <!-- End loader --> */}
      {/* <!-- progress Back to top --> */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default CopyTrading;
