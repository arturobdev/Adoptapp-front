/* eslint-disable react/prop-types */
import TitleBlock from '../Blocks/TitleBlock/TitleBlock';
import './sectionStructure.css';

const SectionStructure = ({ className, sectionTitle, children }) => {
    return (
        <section className={`${className} section-structure`}>
            <TitleBlock title={sectionTitle} />
            {children}
        </section>
    )
}
export default SectionStructure;