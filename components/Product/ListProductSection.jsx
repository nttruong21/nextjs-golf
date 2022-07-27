import Image from 'next/image';
import styles from './ListProductSection.module.scss';
import Button from '../Button';
import { ImSortAmountDesc, ImSortAmountAsc } from 'react-icons/im';
import { TbDiscount } from 'react-icons/tb';
import { CgArrowLongRight } from 'react-icons/cg';
import { BsChevronDown } from 'react-icons/bs';

const ListProductSection = () => {
    return (
        <div className={styles.wrapper}>
            <h3>Sản phẩm</h3>
            {/* BUTTONS */}
            <div className={styles.btns}>
                <Button
                    // className="custom"
                    active
                    leftIcon={<ImSortAmountDesc />}
                    // rightIcon={<BsArrowRight />}
                >
                    Giá cao - thấp
                </Button>
                <Button leftIcon={<ImSortAmountAsc />}>Giá thấp - cao</Button>
                <Button leftIcon={<TbDiscount />}>Khuyến mãi</Button>
            </div>

            {/* LIST PRODUCTS */}
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.sliderItem}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/images/home/best-sellers/1.png"
                                alt="Image Product"
                                width={218}
                                height={202}
                                layout="responsive"
                            />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>Driver SiM2</p>
                            <p className={styles.desc}>Taylor made</p>
                            <div className={styles.price}>
                                <span className={styles.currPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                                <span className={styles.oldPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                            </div>
                            <span className={styles.discount}>Giảm 10%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.sliderItem}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/images/home/best-sellers/1.png"
                                alt="Image Product"
                                width={218}
                                height={202}
                                layout="responsive"
                            />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>Driver SiM2</p>
                            <p className={styles.desc}>Taylor made</p>
                            <div className={styles.price}>
                                <span className={styles.currPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                                <span className={styles.oldPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                            </div>
                            <span className={styles.discount}>Giảm 10%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.sliderItem}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/images/home/best-sellers/1.png"
                                alt="Image Product"
                                width={218}
                                height={202}
                                layout="responsive"
                            />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>Driver SiM2</p>
                            <p className={styles.desc}>Taylor made</p>
                            <div className={styles.price}>
                                <span className={styles.currPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                                <span className={styles.oldPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                            </div>
                            <span className={styles.discount}>Giảm 10%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.sliderItem}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/images/home/best-sellers/1.png"
                                alt="Image Product"
                                width={218}
                                height={202}
                                layout="responsive"
                            />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>Driver SiM2</p>
                            <p className={styles.desc}>Taylor made</p>
                            <div className={styles.price}>
                                <span className={styles.currPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                                <span className={styles.oldPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                            </div>
                            <span className={styles.discount}>Giảm 10%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.sliderItem}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/images/home/best-sellers/1.png"
                                alt="Image Product"
                                width={218}
                                height={202}
                                layout="responsive"
                            />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>Driver SiM2</p>
                            <p className={styles.desc}>Taylor made</p>
                            <div className={styles.price}>
                                <span className={styles.currPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                                <span className={styles.oldPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                            </div>
                            <span className={styles.discount}>Giảm 10%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.sliderItem}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/images/home/best-sellers/1.png"
                                alt="Image Product"
                                width={218}
                                height={202}
                                layout="responsive"
                            />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>Driver SiM2</p>
                            <p className={styles.desc}>Taylor made</p>
                            <div className={styles.price}>
                                <span className={styles.currPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                                <span className={styles.oldPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                            </div>
                            <span className={styles.discount}>Giảm 10%</span>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.sliderItem}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/images/home/best-sellers/1.png"
                                alt="Image Product"
                                width={218}
                                height={202}
                                layout="responsive"
                            />
                        </div>

                        <div className={styles.info}>
                            <p className={styles.name}>Driver SiM2</p>
                            <p className={styles.desc}>Taylor made</p>
                            <div className={styles.price}>
                                <span className={styles.currPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                                <span className={styles.oldPrice}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(10000000)}
                                </span>
                            </div>
                            <span className={styles.discount}>Giảm 10%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.btnSeeMore}>
                <Button rounded rightIcon={<BsChevronDown />}>
                    Xem thêm
                </Button>
            </div>
        </div>
    );
};

export default ListProductSection;