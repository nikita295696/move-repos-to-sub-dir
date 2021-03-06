<?php

namespace Drupal\simple_sitemap\PathProcessor;

use Drupal\Core\PathProcessor\InboundPathProcessorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class PathProcessorSitemapVariant
 * @package Drupal\simple_sitemap\PathProcessor
 */
class PathProcessorSitemapVariant implements InboundPathProcessorInterface {

  /**
   * {@inheritdoc}
   */
  public function processInbound($path, Request $request) {
    $args = explode('/', $path);
    if (count($args) === 3 && $args[2] === 'sitemap.xml') {
      $path = '/sitemaps/' . $args[1] . '/sitemap.xml';
    }

    return $path;
  }
}
