﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probavosem
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Регистр гостей.
    /// </summary>
    // *** Start programmer edit section *** (РегистрГостей CustomAttributes)

    // *** End programmer edit section *** (РегистрГостей CustomAttributes)
    [AutoAltered()]
    [Caption("Регистрация гостей")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РегистрГостейE", new string[] {
            "Дата as \'Дата\'",
            "ФИО as \'ФИО\'",
            "ДатаРождения as \'Дата рождения\'",
            "ДанныеПаспорта as \'Данные паспорта\'",
            "Телефон as \'Телефон\'",
            "Карта as \'Карта\'",
            "Карта.КодКарты as \'Код карты\'",
            "Карта.Комната.Номер as \'Комната\'"}, Hidden=new string[] {
            "Карта.КодКарты"})]
    [MasterViewDefineAttribute("РегистрГостейE", "Карта", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "КодКарты")]
    [View("РегистрГостейL", new string[] {
            "Дата as \'Дата\'",
            "ФИО as \'ФИО\'",
            "ДатаРождения as \'Дата рождения\'",
            "ДанныеПаспорта as \'Данные паспорта\'",
            "Телефон as \'Телефон\'",
            "Карта.КодКарты as \'Код карты\'",
            "Карта.Комната.Номер as \'Комната\'"})]
    public class РегистрГостей : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private string fФИО;
        
        private System.DateTime fДатаРождения;
        
        private int fДанныеПаспорта;
        
        private int fТелефон;
        
        private IIS.Probavosem.Карта fКарта;
        
        // *** Start programmer edit section *** (РегистрГостей CustomMembers)

        // *** End programmer edit section *** (РегистрГостей CustomMembers)

        
        /// <summary>
        /// ДанныеПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (РегистрГостей.ДанныеПаспорта CustomAttributes)

        // *** End programmer edit section *** (РегистрГостей.ДанныеПаспорта CustomAttributes)
        public virtual int ДанныеПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (РегистрГостей.ДанныеПаспорта Get start)

                // *** End programmer edit section *** (РегистрГостей.ДанныеПаспорта Get start)
                int result = this.fДанныеПаспорта;
                // *** Start programmer edit section *** (РегистрГостей.ДанныеПаспорта Get end)

                // *** End programmer edit section *** (РегистрГостей.ДанныеПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрГостей.ДанныеПаспорта Set start)

                // *** End programmer edit section *** (РегистрГостей.ДанныеПаспорта Set start)
                this.fДанныеПаспорта = value;
                // *** Start programmer edit section *** (РегистрГостей.ДанныеПаспорта Set end)

                // *** End programmer edit section *** (РегистрГостей.ДанныеПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (РегистрГостей.Дата CustomAttributes)

        // *** End programmer edit section *** (РегистрГостей.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (РегистрГостей.Дата Get start)

                // *** End programmer edit section *** (РегистрГостей.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (РегистрГостей.Дата Get end)

                // *** End programmer edit section *** (РегистрГостей.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрГостей.Дата Set start)

                // *** End programmer edit section *** (РегистрГостей.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (РегистрГостей.Дата Set end)

                // *** End programmer edit section *** (РегистрГостей.Дата Set end)
            }
        }
        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (РегистрГостей.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (РегистрГостей.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (РегистрГостей.ДатаРождения Get start)

                // *** End programmer edit section *** (РегистрГостей.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (РегистрГостей.ДатаРождения Get end)

                // *** End programmer edit section *** (РегистрГостей.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрГостей.ДатаРождения Set start)

                // *** End programmer edit section *** (РегистрГостей.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (РегистрГостей.ДатаРождения Set end)

                // *** End programmer edit section *** (РегистрГостей.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (РегистрГостей.Телефон CustomAttributes)

        // *** End programmer edit section *** (РегистрГостей.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (РегистрГостей.Телефон Get start)

                // *** End programmer edit section *** (РегистрГостей.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (РегистрГостей.Телефон Get end)

                // *** End programmer edit section *** (РегистрГостей.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрГостей.Телефон Set start)

                // *** End programmer edit section *** (РегистрГостей.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (РегистрГостей.Телефон Set end)

                // *** End programmer edit section *** (РегистрГостей.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (РегистрГостей.ФИО CustomAttributes)

        // *** End programmer edit section *** (РегистрГостей.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (РегистрГостей.ФИО Get start)

                // *** End programmer edit section *** (РегистрГостей.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (РегистрГостей.ФИО Get end)

                // *** End programmer edit section *** (РегистрГостей.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрГостей.ФИО Set start)

                // *** End programmer edit section *** (РегистрГостей.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (РегистрГостей.ФИО Set end)

                // *** End programmer edit section *** (РегистрГостей.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Регистр гостей.
        /// </summary>
        // *** Start programmer edit section *** (РегистрГостей.Карта CustomAttributes)

        // *** End programmer edit section *** (РегистрГостей.Карта CustomAttributes)
        [PropertyStorage(new string[] {
                "Карта"})]
        [NotNull()]
        public virtual IIS.Probavosem.Карта Карта
        {
            get
            {
                // *** Start programmer edit section *** (РегистрГостей.Карта Get start)

                // *** End programmer edit section *** (РегистрГостей.Карта Get start)
                IIS.Probavosem.Карта result = this.fКарта;
                // *** Start programmer edit section *** (РегистрГостей.Карта Get end)

                // *** End programmer edit section *** (РегистрГостей.Карта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрГостей.Карта Set start)

                // *** End programmer edit section *** (РегистрГостей.Карта Set start)
                this.fКарта = value;
                // *** Start programmer edit section *** (РегистрГостей.Карта Set end)

                // *** End programmer edit section *** (РегистрГостей.Карта Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РегистрГостейE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистрГостейE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистрГостейE", typeof(IIS.Probavosem.РегистрГостей));
                }
            }
            
            /// <summary>
            /// "РегистрГостейL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистрГостейL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистрГостейL", typeof(IIS.Probavosem.РегистрГостей));
                }
            }
        }
    }
}
