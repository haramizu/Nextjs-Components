interface Ancestor {
  field: {
    value: string;
  };
  url: {
    path: string;
  };
}

interface Fields {
  data: {
    item: {
      ancestors: Ancestor[];
    };
  };
}

type BreadcrumbProps = {
  fields: Fields;
};

export function BreadCrumbComponent(props: BreadcrumbProps) {
  const data = props.fields?.data;
  const styles = `component breadcrumb`;

  const locale = "en";
  if (data) {
    return (
      <>
        <div className="component-content">
          <div className={styles}>
            {generateBreadcrumbList(data.item.ancestors, locale)}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <p>No data</p>
      </div>
    </>
  );
}

function generateBreadcrumbList(
  ancestors: Ancestor[],
  locale: string
): JSX.Element {
  // Reverse the ancestors array
  const reversedAncestors = ancestors.reverse();

  // check locale and create base Url
  const baseUrl = locale === "en" ? "" : `/${locale}`;

  const ancestorListItems = reversedAncestors.map(
    (ancestor: Ancestor, index: number) => {
      return (
        <li key={index}>
          <a href={baseUrl + ancestor.url.path}>{ancestor.field.value}</a>
        </li>
      );
    }
  );

  // Wrap the list items with ul tags and return the JSX element
  return <ul>{ancestorListItems}</ul>;
}
