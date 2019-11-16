//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    bindExchange: function () {
        wx.navigateTo({
            url: '/pages/exchange/exchange'　　// 页面 A
        })
    },

    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    alertValid2: function () {
        wx.showToast({
            title: '暂未开放',
            icon: 'none',
            duration: 2000,
            success: function () {
                setTimeout(function () {
                    wx.hideToast()
                }, 1000);
            }
        })
    },
    apply: () => {
        wx.showModal({
            title: '一键申请花旗信息卡',
            content: '如果您点击确定，即使用您在本应用中的信息自动为您申请一张花旗信息卡。',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#666',
            confirmColor: '#060',
            confirmText: '确定',
            success: ({confirm, cancel}) => {
                if (confirm) {
                    wx.request({
                        method: 'POST',
                        url: app.d.uniheart + '/citi-dev/onboarding/apply',
                        data:
                            {
                                product: {},
                                applicant: {
                                    motherMaidenName: 'Lisa',
                                    address: {
                                        addressType: 'HOME_ADDRESS',
                                        addressLine1: '40A Orchard Road',
                                        addressLine2: '#99-99 Macdonald House',
                                        addressLine3: 'Orchard Avenue 2',
                                        addressLine4: 'Street 65',
                                        cityName: 'Singapore',
                                        state: 'Singapore',
                                        postalCode: '345346',
                                        provinceCode: 'Singapore',
                                        countryCode: 'SG',
                                        okToMail: true,
                                        residenceDurationInYears: 5,
                                        residenceDurationInMonths: 4,
                                    },
                                    email: {
                                        emailAddress: 'matt.hayden@gmail.com',
                                        okToEmail: true,
                                        isPreferredEmailAddress: true,
                                    },
                                    phone: {
                                        phoneType: 'PRIMARY_MOBILE_NUMBER',
                                        phoneCountryCode: '61',
                                        areaCode: '02',
                                        phoneNumber: '64042321',
                                        extension: '23',
                                        okToSms: true,
                                        okToCall: true,
                                    },
                                    employmentDetails: {
                                        employerName: 'Citi Bank',
                                        jobTitle: 'ACCOUNTANT',
                                        occupationCode: 'ACCOUNTANT',
                                        industryCode: 'CITIBANK_SUB_NON_BANK',
                                        employmentDurationInYears: 5,
                                        employmentDurationInMonths: 3,
                                        employmentStatus: 'EMPLOYED',
                                        monthsInPreviousEmployment: 5,
                                        yearsInPreviousEmployment: 4,
                                        accountantName: 'Javier',
                                        accountantFirmName: 'ACME',
                                        yearsInIndustry: 5,
                                        monthsInIndustry: 6,
                                    },
                                    identificationDocumentDetails: {
                                        idType: 'PASSPORT',
                                        idNumber: 'S42258011',
                                        idExpiryDate: '2027-04-11',
                                        idIssueDate: '2017-04-12',
                                        idIssuePlace: 'AU',
                                        idIssueState: 'QUEENSLAND',
                                        idIssueCountry: 'AU',
                                        isPrimaryId: true,
                                    },
                                    consentDetails: {
                                        consentType: 'BUREAU_PULL_CONSENT',
                                        isConsentGiven: true,
                                    },
                                },
                            },
                        success(res) {
                            console.log('res = ', res)
                            wx.showToast({
                                title: '申请完成'
                            })
                        }
                    })
                }

                if (cancel) {
                    console.log('您取消了申请')
                }
            }
        })
    }
})
