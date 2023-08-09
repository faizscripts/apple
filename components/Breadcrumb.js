import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Breadcrumb({ breadcrumbArray }) {

    const renderBreadcrumbArray = () => {
      return breadcrumbArray.map(
          (breadcrumb) => {
              if (!breadcrumb.link) {
                  return (
                      <li key={breadcrumb.name} className="breadcrumb-item active">
                          {breadcrumb.name}
                      </li>
                  )
              }

              return (
                  <li key={breadcrumb.name} className="breadcrumb-item">
                      <Link href={breadcrumb.link}>{breadcrumb.name}</Link>
                  </li>
              )
          }
      )
    }

    return (
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} className="home-breadcrumb"></FontAwesomeIcon>
                </Link>
            </li>
            {renderBreadcrumbArray()}
        </ol>
    )
}

export default Breadcrumb;
